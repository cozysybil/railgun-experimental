import React, {
  useRef,
  HTMLProps,
  useState,
  useEffect,
  ChangeEvent,
} from "react";
import { Currency, getBalance, mint, transfer } from "../services/coin";
import { privateTransfer, shield, unshield } from "../services/railgun";
import ActionWithAddress from "./ActionWithAddress";
import Input from "./Input";

interface SubUserSectionProps extends HTMLProps<HTMLInputElement> {
  privateAddress: string;
  publicAddress: string;
  id: string;
  toPrivateBob: string;
  zkBalance: string;
  zkBBBalance: string;
  setComponentsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubUserSection = (props: SubUserSectionProps) => {
  const {
    privateAddress,
    publicAddress,
    id,
    toPrivateBob,
    zkBalance,
    zkBBBalance,
    setComponentsUpdate,
    setShowMessage,
  } = props;
  const [aaBalance, setAaBalance] = useState("0");
  const [bbBalance, setBbBalance] = useState("0");
  const [publicTransferValue, setPublicTransferValue] = useState("");
  const [publicTransferCurrency, setPublicTransferCurrency] = useState(
    Currency.AA
  );
  const [privateTransferValue, setPrivateTransferValue] = useState("");
  const [privateTransferCurrency, setPrivateTransferCurrency] = useState(
    Currency.AA
  );
  const [shieldValue, setShieldValue] = useState("");
  const [shieldCurrency, setShieldCurrency] = useState(Currency.AA);
  const [unshieldValue, setUnshieldValue] = useState("");
  const [unshieldCurrency, setUnshieldCurrency] = useState(Currency.AA);
  const [mintLoading, setMintLoading] = useState(false);
  const [txHash, setTxHash] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const aaBalance = await getBalance(publicAddress, Currency.AA);
      const bbBalance = await getBalance(publicAddress, Currency.BB);
      setAaBalance(aaBalance);
      setBbBalance(bbBalance);
    };

    fetchData();
  }, []);

  const handleUnshieldClick = async (amount: string, currency: Currency) => {
    try {
      setShowMessage(true);
      const response = await unshield(amount, id, currency);
      setTxHash(response.transactionHash);
      const balance = await getBalance(publicAddress, Currency.AA);
      const bbBalance = await getBalance(publicAddress, Currency.BB);
      setAaBalance(balance);
      setBbBalance(bbBalance);
      setComponentsUpdate(true);
    } catch (error) {
      console.error("Error shield tokens:", error);
    }
  };

  const handlePrivateTransferClick = async (
    amount: string,
    currency: Currency
  ) => {
    try {
      setShowMessage(true);
      const response = await privateTransfer(
        amount,
        id,
        toPrivateBob,
        currency
      );
      setTxHash(response.transactionHash);
      const balance = await getBalance(publicAddress, Currency.AA);
      const bbBalance = await getBalance(publicAddress, Currency.BB);
      setBbBalance(bbBalance);
      setAaBalance(balance);
      setComponentsUpdate(true);
    } catch (error) {
      console.error("Error shield tokens:", error);
    }
  };

  const handleMintClick = async (currency: Currency) => {
    try {
      setMintLoading(true);
      await mint(publicAddress, "10", currency); // Call the mint function
      setMintLoading(false);
      // Fetch the updated balance after minting
      const balance = await getBalance(publicAddress, Currency.AA);
      setAaBalance(balance);
      const bbBalance = await getBalance(publicAddress, Currency.BB);
      setBbBalance(bbBalance);
    } catch (error) {
      console.error("Error minting tokens:", error);
      setMintLoading(false);
    }
  };

  const handleTransferClick = async (amount: string, currency: Currency) => {
    try {
      setShowMessage(true);
      const transactionHash = await transfer(
        true,
        "",
        process.env.REACT_APP_B_PUBLIC_KEY || "",
        amount,
        currency
      ); // Call the mint function
      setTxHash(transactionHash);
      // Fetch the updated balance after minting
      const balance = await getBalance(publicAddress, Currency.AA);
      setAaBalance(balance);
      const bbBalance = await getBalance(publicAddress, Currency.BB);
      setBbBalance(bbBalance);
      setComponentsUpdate(true);
    } catch (error) {
      console.error("Error transfer tokens:", error);
    }
  };

  const handleShieldClick = async (amount: string, currency: Currency) => {
    try {
      setShowMessage(true);
      const response = await shield(amount, privateAddress, currency);
      setTxHash(response.transactionHash);
      const balance = await getBalance(publicAddress, Currency.AA);
      setAaBalance(balance);
      const bbBalance = await getBalance(publicAddress, Currency.BB);
      setBbBalance(bbBalance);
      setComponentsUpdate(true);
    } catch (error) {
      console.error("Error shield tokens:", error);
    }
  };

  const handlePublicTransferCurrency = (event: any) => {
    setPublicTransferCurrency(event.target.value);
  };

  const handlePublicTransferInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPublicTransferValue(event.target.value);
  };

  const handlePrivateTransferCurrency = (event: any) => {
    setPrivateTransferCurrency(event.target.value);
  };

  const handlePrivateTransferInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPrivateTransferValue(event.target.value);
  };

  const handleShieldCurrency = (event: any) => {
    setShieldCurrency(event.target.value);
  };

  const handleShieldInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShieldValue(event.target.value);
  };

  const handleUnshieldCurrency = (event: any) => {
    setUnshieldCurrency(event.target.value);
  };

  const handleUnhieldInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUnshieldValue(event.target.value);
  };

  return (
    <>
      <div className="row-span-2 col-span-2 rounded flex flex-col p-1 gap-2 h-full overflow-auto">
        <div className="basis-1/12 break-words text-m text-center">
          {"Private Wallet"}
        </div>
        <div className="basis-5/12 flex flex-row grid grid-cols-2 gap-2">
          <div className="basis-1/2 flex flex-col h-full">
            <div className="text-sm">{"Address:"}</div>
            <div className="text-stone-400 break-words text-sm">
              {privateAddress}
            </div>
          </div>
          <div className="basis-1/2 flex flex-col h-full">
            <div className="text-sm">{"Tokens:"}</div>
            <div className="flex flex-col gap-2">
              <div className="h-10 break-words text-l font-bold border-2 rounded border-stone-200 items-center py-1 px-0">
                {zkBalance + " zkAA"}
              </div>
              <div className="h-10 break-words text-l font-bold border-2 rounded border-stone-200 items-center py-1 px-0">
                {zkBBBalance + " zkBB"}
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/12 text-sm ">{"Activity:"}</div>
        <div className="basis-3/12 items-center ">
          <div className="grow flex flex-row gap-2 items-center">
            <select
              className="basis-1/6 text-sm py-2 px-4 rounded"
              onChange={handleUnshieldCurrency}
            >
              <option value={Currency.AA}>{"zkAA"}</option>
              <option value={Currency.BB}>{"zkBB"}</option>
            </select>

            <Input
              id={"unshieldTo"}
              placeholder={"Unshield amount"}
              type={"text"}
              containerClassName={"grow"}
              required
              value={unshieldValue}
              onChange={handleUnhieldInputChange}
            />
            <button
              disabled={false}
              onClick={() =>
                handleUnshieldClick(unshieldValue, unshieldCurrency)
              }
              className={
                "basis-3/6 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              }
            >
              {"Unshield to Public Wallet"}
            </button>
          </div>
        </div>
        <div className="basis-3/12 items-center">
          <div className="grow flex flex-row gap-2 items-center">
            <select
              className="basis-1/6 text-sm py-2 px-4 rounded"
              onChange={handlePrivateTransferCurrency}
            >
              <option value={Currency.AA}>{"zkAA"}</option>
              <option value={Currency.BB}>{"zkBB"}</option>
            </select>

            <Input
              id={"privateSendTo"}
              placeholder={"amount"}
              type={"text"}
              containerClassName={"grow"}
              required
              value={privateTransferValue}
              onChange={handlePrivateTransferInputChange}
            />
            <button
              disabled={false}
              onClick={() =>
                handlePrivateTransferClick(
                  privateTransferValue,
                  privateTransferCurrency
                )
              }
              className={
                "basis-3/6 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              }
            >
              {"Send to Bob privately"}
            </button>
          </div>
        </div>
      </div>
      <div className="row-span-2 col-span-2 rounded flex flex-col p-1 gap-2 h-full overflow-auto">
        <div className="basis-1/12 break-words text-m text-center">
          {"Public Wallet"}
        </div>
        <div className="basis-5/12 flex flex-row grid grid-cols-2 gap-2">
          <div className="basis-1/2 flex flex-col h-full">
            <div className="text-sm">{"Address:"}</div>
            <div className="text-stone-400 break-words text-sm">
              {publicAddress}
            </div>
          </div>
          <div className="basis-1/2 flex flex-col h-full">
            <div className="text-sm">{"Tokens:"}</div>
            <div className="flex flex-col gap-2">
              <div className="h-10 break-words text-l font-bold border-2 rounded border-stone-200 flex flex-rows items-center">
                <div className="w-3/6 py-1 px-0 break-words">
                  {aaBalance + " AA"}
                </div>
                <div className="w-3/6">
                  <button
                    type="submit"
                    className={
                      mintLoading
                        ? "text-bloack text-xs font-bold py-1"
                        : "bg-violet-500 text-white text-xs font-bold py-1 rounded focus:outline-none focus:shadow-outline"
                    }
                    onClick={() => handleMintClick(Currency.AA)}
                    disabled={mintLoading}
                  >
                    {mintLoading ? "Minting..." : "+ request tokens"}
                  </button>
                </div>
              </div>
              <div className="h-10 break-words text-l font-bold border-2 rounded border-stone-200 flex flex-rows items-center">
                <div className="w-3/6 py-1 px-0 break-words">
                  {bbBalance + " BB"}
                </div>
                <div className="w-3/6">
                  <button
                    type="submit"
                    className={
                      mintLoading
                        ? "text-bloack text-xs font-bold py-1"
                        : "bg-violet-500 text-white text-xs font-bold py-1 rounded focus:outline-none focus:shadow-outline"
                    }
                    onClick={() => handleMintClick(Currency.BB)}
                    disabled={mintLoading}
                  >
                    {mintLoading ? "Minting..." : "+ request tokens"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/12 text-sm ">{"Activity:"}</div>
        <div className="basis-3/12 items-center ">
          <div className="grow flex flex-row gap-2 items-center">
            <select
              className="basis-1/6 text-sm py-2 px-4 rounded"
              onChange={handleShieldCurrency}
            >
              <option value={Currency.AA}>{"AA"}</option>
              <option value={Currency.BB}>{"BB"}</option>
            </select>

            <Input
              id={"shieldTo"}
              placeholder={"Shield amount"}
              type={"text"}
              containerClassName={"grow"}
              required
              value={shieldValue}
              onChange={handleShieldInputChange}
            />
            <button
              disabled={false}
              onClick={() => handleShieldClick(shieldValue, shieldCurrency)}
              className={
                "basis-3/6 bg-violet-500 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              }
            >
              {"Shield to Private Wallet"}
            </button>
          </div>
        </div>
        <div className="basis-3/12 items-center">
          <div className="grow flex flex-row gap-2 items-center">
            <select
              className="basis-1/6 text-sm py-2 px-4 rounded"
              onChange={handlePublicTransferCurrency}
            >
              <option value={Currency.AA}>{"AA"}</option>
              <option value={Currency.BB}>{"BB"}</option>
            </select>

            <Input
              id={"publicSendTo"}
              placeholder={"amount"}
              type={"text"}
              containerClassName={"grow"}
              required
              value={publicTransferValue}
              onChange={handlePublicTransferInputChange}
            />
            <button
              disabled={false}
              onClick={() =>
                handleTransferClick(publicTransferValue, publicTransferCurrency)
              }
              className={
                "basis-3/6 bg-violet-500 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              }
            >
              {"Send to Bob publicly"}
            </button>
          </div>
        </div>
      </div>
      {txHash.length > 0 && (
        <div className="row-span-1 col-span-4 rounded flex flex-col justify-center items-center p-1 gap-2 h-full overflow-auto break-words text-xs">
          {txHash}
        </div>
      )}
    </>
  );
};

export default SubUserSection;
