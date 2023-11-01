const { groth16 } = require("snarkjs");

// export interface SolidityProof {
//   a: {
//     x: bigint;
//     y: bigint;
//   };
//   b: {
//     x: [bigint, bigint];
//     y: [bigint, bigint];
//   };
//   c: {
//     x: bigint;
//     y: bigint;
//   };
// }

// export interface ProofBundle {
//   javascript: SnarkjsProof;
//   solidity: SolidityProof;
// }

/**
 * Formats javascript proof to solidity proof
 *
 * @param proof - javascript proof
 * @returns solidity proof
 */
function formatProof(proof) {
  return {
    a: { x: BigInt(proof.pi_a[0]), y: BigInt(proof.pi_a[1]) },
    b: {
      x: [BigInt(proof.pi_b[0][1]), BigInt(proof.pi_b[0][0])],
      y: [BigInt(proof.pi_b[1][1]), BigInt(proof.pi_b[1][0])],
    },
    c: { x: BigInt(proof.pi_c[0]), y: BigInt(proof.pi_c[1]) },
  };
}

/**
 * Generate proof for a circuit
 *
 * @param artifact - circuit artifact
 * @param inputs - circuit inputs
 * @returns proof
 */
async function prove(artifact, inputs) {
  const { proof } = await groth16.fullProve(
    inputs,
    artifact.wasm,
    artifact.zkey
  );
  return {
    javascript: proof,
    solidity: formatProof(proof),
  };
}

module.exports = { formatProof, prove };
