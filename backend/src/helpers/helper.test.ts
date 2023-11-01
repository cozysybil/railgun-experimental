/// <reference types="../types/global" />
const {
  ContractTransaction,
  Provider,
  TransactionResponse,
  Wallet,
} = require("ethers");
const artifacts = require("./test-artifacts-lite");
const {
  Nullifier,
} = require("@railgun-community/engine/dist/models/formatted-types");
const {
  AccumulatedEvents,
  CommitmentEvent,
  EngineEvent,
  QuickSync,
  WalletScannedEventData,
  UnshieldStoredEvent,
} = require("@railgun-community/engine/dist/models/event-types");
const {
  AbstractWallet,
} = require("@railgun-community/engine/dist/wallet/abstract-wallet");
const { Chain } = require("@railgun-community/engine/dist/models/engine-types");
const {
  ArtifactGetter,
  PublicInputs,
} = require("@railgun-community/engine/dist/models/prover-types");
const {
  mnemonicToPrivateKey,
} = require("@railgun-community/engine/dist/key-derivation");
const {
  TypedContractEvent,
  TypedDeferredTopicFilter,
} = require("@railgun-community/engine/dist/abi/typechain/common");
const {
  RailgunSmartWalletContract,
} = require("@railgun-community/engine/dist/contracts/railgun-smart-wallet/railgun-smart-wallet");
const { promiseTimeout } = require("@railgun-community/engine/dist/utils");

const DECIMALS_18 = BigInt(10) ** BigInt(18);
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

const testNodeArtifactGetter = async (
  inputs: PublicInputs
): Promise<Artifact> => {
  const nullifiers = inputs.nullifiers.length;
  const commitments = inputs.commitmentsOut.length;
  assertTestNodeArtifactExists(nullifiers, commitments);

  try {
    return {
      ...artifacts.getArtifact(nullifiers, commitments),
      dat: undefined,
    };
  } catch (err) {
    throw new Error(
      `Could not find lite artifact for tests: ${inputs.nullifiers.length}:${inputs.commitmentsOut.length}`
    );
  }
};

const assertTestNodeArtifactExists = (
  nullifiers: number,
  commitments: number
): void => {
  const artifactList = artifacts.listArtifacts();
  const found = artifactList.find((artifactMetadata) => {
    return (
      artifactMetadata.nullifiers === nullifiers &&
      artifactMetadata.commitments === commitments
    );
  });
  if (!found) {
    throw new Error(
      `No artifacts for inputs: ${nullifiers}-${commitments}. NOTE: railgun-community-circuit-artifacts-lite only includes a small subset of artifacts for testing.`
    );
  }
};

const testArtifactsGetter: ArtifactGetter = {
  getArtifacts: testNodeArtifactGetter,
  assertArtifactExists: assertTestNodeArtifactExists,
};

const mockQuickSync: QuickSync = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _chain: Chain,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _startingBlock: number
): Promise<AccumulatedEvents> =>
  Promise.resolve({
    commitmentEvents: [] as CommitmentEvent[],
    unshieldEvents: [] as UnshieldStoredEvent[],
    nullifierEvents: [] as Nullifier[],
  });

const awaitScan = (wallet: AbstractWallet, chain: Chain) =>
  new Promise((resolve, reject) =>
    wallet.once(
      EngineEvent.WalletScanComplete,
      ({ chain: returnedChain }: WalletScannedEventData) =>
        returnedChain.type === chain.type && returnedChain.id === chain.id
          ? resolve(returnedChain)
          : reject()
    )
  );

const awaitMultipleScans = async (
  wallet: AbstractWallet,
  chain: Chain,
  numScans: number
) => {
  let i = 0;
  while (i < numScans) {
    // eslint-disable-next-line no-await-in-loop
    await awaitScan(wallet, chain);
    i += 1;
  }
  return Promise.resolve();
};

const awaitRailgunSmartWalletEvent = async (
  railgunSmartWallet: RailgunSmartWalletContract,
  event: TypedDeferredTopicFilter<TypedContractEvent>
) => {
  await promiseTimeout(
    new Promise<void>((resolve) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      railgunSmartWallet.contractForListeners.once(event, () => resolve());
    }),
    15000,
    `Timed out waiting for RailgunSmartWallet event: ${event.fragment.name}`
  );
};

const awaitRailgunSmartWalletShield = async (
  railgunSmartWallet: RailgunSmartWalletContract
) => {
  return awaitRailgunSmartWalletEvent(
    railgunSmartWallet,
    railgunSmartWallet.contract.filters.Shield()
  );
};

const awaitRailgunSmartWalletTransact = async (
  railgunSmartWallet: RailgunSmartWalletContract
) => {
  return awaitRailgunSmartWalletEvent(
    railgunSmartWallet,
    railgunSmartWallet.contract.filters.Transact()
  );
};

const awaitRailgunSmartWalletUnshield = async (
  railgunSmartWallet: RailgunSmartWalletContract
) => {
  return awaitRailgunSmartWalletEvent(
    railgunSmartWallet,
    railgunSmartWallet.contract.filters.Unshield()
  );
};

const awaitRailgunSmartWalletNullified = async (
  railgunSmartWallet: RailgunSmartWalletContract
) => {
  return awaitRailgunSmartWalletEvent(
    railgunSmartWallet,
    railgunSmartWallet.contract.filters.Nullified()
  );
};

const getEthersWallet = (mnemonic: string, provider?: Provider): Wallet => {
  const privateKey = mnemonicToPrivateKey(mnemonic);
  return new Wallet(privateKey, provider);
};

// TODO: This logic is messy - it's because of Ethers v6.4.0.
// It seems like the nonce isn't updated quickly enough via hardhat.
// Ethers will probably improve the nonce calculation in the future. (Or hardhat?).
// We should be able to remove `additionalNonce` and `retries` when it's updated.
const sendTransactionWithLatestNonce = async (
  wallet: Wallet,
  transaction: ContractTransaction,
  expectedNextNonce?: number,
  retries = 0
): Promise<TransactionResponse> => {
  if (retries > 3) {
    throw new Error("Nonce already used - many pending transactions");
  }
  const latestNonce = await wallet.getNonce("latest");
  const nonce = expectedNextNonce ?? latestNonce;
  const updatedNonceTx: ContractTransaction = {
    ...transaction,
    nonce,
  };
  try {
    return await wallet.sendTransaction(updatedNonceTx);
  } catch (err) {
    if (!(err instanceof Error)) {
      throw err;
    }
    if (err.message.includes("nonce has already been used")) {
      return sendTransactionWithLatestNonce(
        wallet,
        transaction,
        nonce + 1,
        retries + 1
      );
    }
    throw err;
  }
};

module.exports = {
  DECIMALS_18,
  ZERO_ADDRESS,
  testArtifactsGetter,
  mockQuickSync,
  awaitScan,
  awaitMultipleScans,
  awaitRailgunSmartWalletEvent,
  awaitRailgunSmartWalletShield,
  awaitRailgunSmartWalletTransact,
  awaitRailgunSmartWalletUnshield,
  awaitRailgunSmartWalletNullified,
  getEthersWallet,
  sendTransactionWithLatestNonce,
};
