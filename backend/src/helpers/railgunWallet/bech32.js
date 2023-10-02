// encode mock address 
// see: /Railgun-Community/engine/src/key-derivation/bech32.ts
const { bech32m } = require("@scure/base");

function encodeAddress(addressData) {
  // Encode address
  const spendingAddress = bech32m.encode(
    "0zk",
    bech32m.toWords(addressData.spendingKey),
    127
  );
  const viewingAddress = bech32m.encode(
    "0zk",
    bech32m.toWords(addressData.viewingKey),
    127
  );

  return {
    spendingAddress,
    viewingAddress,
  };
}

function decodeAddress(addressData) {
  const spendingAddressData = bech32m.decode(addressData.spendingAddress, 127);
  const viewingAddressData = bech32m.decode(addressData.viewingAddress, 127);

  const spendingAddress = bech32m.fromWords(spendingAddressData.words)
  const viewingAddress = bech32m.fromWords(viewingAddressData.words)

  return {
    spendingAddress,
    viewingAddress,
  };
}

module.exports = { encodeAddress, decodeAddress };
