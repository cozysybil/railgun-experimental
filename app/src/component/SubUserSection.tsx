import React, { useRef, HTMLProps, useState, useEffect } from "react";
import { getBalance, mint, transfer } from "../services/coin";
import { getZkBalance, shield } from "../services/railgun";
import ActionWithAddress from "./ActionWithAddress";

interface SubUserSectionProps extends HTMLProps<HTMLInputElement> {
  privateAddress: string;
  publicAddress: string;
  setComponentsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubUserSection = (props: SubUserSectionProps) => {
  const { privateAddress, publicAddress, setComponentsUpdate } = props;
  const [aaBalance, setAaBalance] = useState("0");
  const [zkBalance, setZkBalance] = useState("0");
  const [mintLoading, setMintLoading] = useState(false);
  const [txHash, setTxHash] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const balance = await getBalance(publicAddress);
      console.log({ balance });
      setAaBalance(balance);
      const zkBalance = await getZkBalance();
      setZkBalance(zkBalance.newBalance);
    };

    fetchData();
  }, []);

  const handleMintClick = async () => {
    try {
      setMintLoading(true);
      await mint(publicAddress, "10"); // Call the mint function
      setMintLoading(false);
      // Fetch the updated balance after minting
      const balance = await getBalance(publicAddress);
      setAaBalance(balance);
    } catch (error) {
      console.error("Error minting tokens:", error);
      setMintLoading(false);
    }
  };

  const handleTransferClick = async (amount: string) => {
    try {
      const transactionHash = await transfer(
        true,
        "",
        process.env.REACT_APP_B_PUBLIC_KEY || "",
        amount
      ); // Call the mint function
      setTxHash(transactionHash);
      // Fetch the updated balance after minting
      const balance = await getBalance(publicAddress);
      setAaBalance(balance);
      setComponentsUpdate(true)
    } catch (error) {
      console.error("Error transfer tokens:", error);
    }
  };

  const handleShieldClick = async (amount: string) => {
    try {
      const response = await shield(amount);
      setTxHash(response.transactionHash);
      setZkBalance(response.newBalance);
      const balance = await getBalance(publicAddress);
      setAaBalance(balance);
      setComponentsUpdate(true)
    } catch (error) {
      console.error("Error shield tokens:", error);
    }
  };

  return (
    <>
      <div className="row-span-2 col-span-2 rounded flex flex-col p-1 gap-2 h-full overflow-auto">
        <div className="basis-1/12 break-words text-xs">
          {"Private Wallet:"} {privateAddress}
        </div>
        <div className="basis-5/12 flex flex-row items-stretch text-4xl gap-2">
          <div className="w-4/6 py-2 px-0 break-words">
            {zkBalance + " zkAA"}
          </div>
          <div className="w-2/6"></div>
        </div>
        <div className="basis-3/12 items-center ">
          <ActionWithAddress
            buttonName={"Unshield to Public Wallet"}
            buttonAction={(value) => {
              console.log("Unshield to:", value);
            }}
            buttonContainerClassName={
              // ? "basis-2/3 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              "basis-2/3 bg-gray-300 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            }
            buttonDisabled={true}
            inputId={"unshieldTo"}
            inputPlaceHolder={"Unshield amount"}
            inputType="text"
            inputContainerClassName="grow"
          />
        </div>
        <div className="basis-3/12 items-center">
          <ActionWithAddress
            buttonName={"Send zkAA to Bob privately"}
            buttonAction={(value) => {
              console.log("Private send to:", value);
            }}
            buttonContainerClassName={
              // ? "basis-2/3 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              "basis-2/3 bg-gray-300 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            }
            buttonDisabled={true}
            inputId={"privateSendTo"}
            inputPlaceHolder="amount"
            inputType="text"
            inputContainerClassName="grow"
          />
        </div>
        {/* {txHash.length > 0 && (
          <div className="break-words text-xs">{txHash}</div>
        )} */}
      </div>
      <div className="row-span-2 col-span-2 rounded flex flex-col p-1 gap-2 h-full overflow-auto">
        <div className="basis-1/12 break-words text-xs">
          {"Public Wallet:"} {publicAddress}
        </div>
        <div className="basis-5/12 flex flex-row items-stretch text-4xl gap-2">
          <div className="w-4/6 py-2 px-0 break-words">{aaBalance + " AA"}</div>
          <div className="w-2/6">
            <button
              type="submit"
              className="bg-violet-500 text-white text-sm font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
              onClick={handleMintClick}
              disabled={mintLoading}
            >
              {mintLoading ? "Minting..." : "+ request tokens"}
            </button>
          </div>
        </div>
        <div className="basis-3/12 items-center ">
          <ActionWithAddress
            buttonName={"Shield to Private Wallet"}
            buttonAction={(value) => {
              handleShieldClick(value);
              console.log("shield", value);
            }}
            buttonContainerClassName={
              "basis-2/3 bg-violet-500 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            }
            buttonDisabled={false}
            inputId={"shieldTo"}
            inputPlaceHolder={"Shield amount"}
            inputType="text"
            inputContainerClassName="grow"
          />
        </div>
        <div className="basis-3/12 items-center">
          <ActionWithAddress
            buttonName={"Send AA to Bob publicly"}
            buttonAction={(value) => {
              handleTransferClick(value);
              console.log("Public send to:", value);
            }}
            buttonContainerClassName={
              "basis-2/3 bg-violet-500 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            }
            buttonDisabled={false}
            inputId={"publicSendTo"}
            inputPlaceHolder="amount"
            inputType="text"
            inputContainerClassName="grow"
          />
        </div>
        {txHash.length > 0 && (
          <div className="break-words text-xs">{txHash}</div>
        )}
      </div>
    </>
  );
};

export default SubUserSection;
