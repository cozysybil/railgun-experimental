import React, { useEffect, useState } from "react";
import Input from "./component/Input";
import "./App.css";
import SubUserSection from "./component/SubUserSection";
import ActionWithAddress from "./component/ActionWithAddress";

// @ts-ignore
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { getTransactionDetails } from "./services/transaction";
import {
  getWallet1PrivateAdress,
  getWallet2PrivateAdress,
  testLogic,
} from "./services/railgun";
import { getBalance } from "./services/coin";

interface Wallet {
  spendingAddress: string;
  viewingAddress: string;
  // Other properties of the wallet object
}

const RALGUN_CONTRACT = "0x3aC005eCF84B510fd3Ff37133c1a641Cd79879b5";
const TREASURY = "0xEd83FCB503e5b7309ACB8dfD39CaeaEc86a8d164"

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [viewLoading, setViewLoading] = useState(false);
  const [receipt, setReceipt] = useState("Nothing to show here");
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const [private1, setPrivate1] = useState<Wallet | null>(null);
  const [private2, setPrivate2] = useState<Wallet | null>(null);
  const [BobAABalance, setBobAABalance] = useState("0");
  const [poolBalance, setPoolBalance] = useState("0");
  const [trasuryBalance, setTreasuryBalance] = useState("0");
  const [componentsUpdate, setComponentsUpdate] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  useEffect(() => {
    const fetchAccount = async () => {
      setShowMessage(true);

      const address = await getAccount();
      setAccountAddress(address);

      const private1 = await getWallet1PrivateAdress();
      setPrivate1(private1);

      const private2 = await getWallet2PrivateAdress();
      setPrivate2(private2);

      const balance = await getBalance(
        process.env.REACT_APP_B_PUBLIC_KEY || ""
      );
      setBobAABalance(balance);

      const poolBalance = await getBalance(
        RALGUN_CONTRACT
      );
      setPoolBalance(poolBalance);

      const trasuryBalance = await getBalance(
        TREASURY
      );
      setTreasuryBalance(trasuryBalance);

      setShowMessage(false);
    };

    fetchAccount();
    setComponentsUpdate(false);
  }, []);

  useEffect(() => {
    const fetchAccount = async () => {
      setShowMessage(true);

      const address = await getAccount();
      setAccountAddress(address);

      const private1 = await getWallet1PrivateAdress();
      setPrivate1(private1);

      const private2 = await getWallet2PrivateAdress();
      setPrivate2(private2);

      const balance = await getBalance(
        process.env.REACT_APP_B_PUBLIC_KEY || ""
      );
      setBobAABalance(balance);

      const poolBalance = await getBalance(
        RALGUN_CONTRACT
      );
      setPoolBalance(poolBalance);

      const trasuryBalance = await getBalance(
        TREASURY
      );
      setTreasuryBalance(trasuryBalance);

      setShowMessage(false);
    };

    if (componentsUpdate) {
      fetchAccount();
      setComponentsUpdate(false);
    }
  }, [componentsUpdate]);

  useEffect(() => {
    testLogic();
  }, []);

  const getAccount = async (): Promise<string> => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts[0];
    } catch (error) {
      console.error("Error fetching Ethereum account:", error);
      return "0";
    }
  };

  const handleViewTransactionClick = async (txHash: string) => {
    try {
      setViewLoading(true);
      const receipt = await getTransactionDetails(txHash);
      if (receipt.length > 0) {
        setReceipt(receipt);
      } else {
        setReceipt("Transaction not found");
      }
      setViewLoading(false);
    } catch (error) {
      console.error("Error view transaction:", error);
      setViewLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-slate-900">
      <div className="grid grid-cols-4 grid-rows-6 gap-4 h-full p-5">
        <button
          type="submit"
          onClick={handleButtonClick}
          className="absolute top-8 right-8 bg-violet-500 text-white text-sm font-bold py-1 px-3 rounded-full flex items-center"
        >
          <ArrowPathIcon className="w-4 h-4 mr-1" /> Refresh
        </button>
        {showMessage && (
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-300 shadow p-2 rounded w-50">
            Fetching new data ...
          </div>
        )}
        <div className="col-span-4 text-4xl font-extrabold flex items-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Railgun Lab
          </span>
        </div>
        <div className="col-span-2 row-span-2 bg-zinc-100 rounded flex flex-col p-3 grid grid-cols-4 gap-4 h-full">
          <div className="row-span-2 col-span-4 text-sm grid place-items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              My MetaMask Account
            </span>
          </div>
          {accountAddress && (
            <SubUserSection
              privateAddress={private1?.spendingAddress || ""}
              publicAddress={accountAddress || ""}
              setComponentsUpdate={setComponentsUpdate}
            />
          )}
        </div>
        <div className="col-span-1 row-span-2 bg-zinc-100 rounded flex flex-col p-3 grid grid-cols-4 gap-4 h-full">
          <div className="row-span-2 col-span-4 text-sm grid place-items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bob's Account
            </span>
          </div>
          <div className="row-span-2 col-span-2 rounded flex flex-col p-1 gap-1 h-full overflow-auto">
            <div className="basis-1/12 break-words text-xs">
              Private Wallet: {private2?.spendingAddress || ""}
            </div>
            <div className="basis-3/12 flex flex-row items-stretch text-4xl gap-1">
              <div className="py-2 px-0">
                <span>{"0 zkAA"}</span>
              </div>
            </div>
          </div>
          <div className="row-span-2 col-span-2 rounded flex flex-col p-1 gap-1 h-full overflow-auto">
            <div className="basis-1/12 break-words text-xs">
              Public Wallet: {process.env.REACT_APP_B_PUBLIC_KEY}
            </div>
            <div className="basis-3/12 flex flex-row items-stretch text-4xl gap-1">
              <div className="py-2 px-0">
                <span>{BobAABalance + " AA"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 bg-zinc-100 rounded flex flex-col p-1 grid grid-cols-4 gap-1 h-full">
          <div className="row-span-1 col-span-4 text-sm grid place-items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Pool's
            </span>
          </div>
          <div className="row-span-4 col-span-4 rounded flex flex-col p-1 gap-2 h-full overflow-auto">
            <div className="basis-2/12 break-words text-xs ">
              Contract address: {process.env.REACT_APP_RAILGUN_LOGIC}
            </div>
            <div className="basis-10/12 flex flex-row items-stretch text-4xl gap-2">
              <div className="py-2 px-0">
                <span>{poolBalance + " AA"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 bg-zinc-100 rounded flex flex-col p-1 grid grid-cols-4 gap-1 h-full">
          <div className="row-span-1 col-span-4 text-sm grid place-items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Treasury
            </span>
          </div>
          <div className="row-span-4 col-span-4 rounded flex flex-col p-1 gap-2 h-full overflow-auto">
            <div className="basis-2/12 break-words text-xs ">
              Treasury address: {TREASURY}
            </div>
            <div className="basis-10/12 flex flex-row items-stretch text-4xl gap-2">
              <div className="py-2 px-0">
                <span>{trasuryBalance + " AA"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 row-span-5 bg-zinc-100 rounded flex flex-col p-5">
          <div className="basis-1/6 flex items-center">
            <ActionWithAddress
              buttonName={viewLoading ? "looking ..." : "View"}
              buttonAction={(value) => {
                handleViewTransactionClick(value);
                console.log("View transaction: ", value);
              }}
              buttonContainerClassName="basis-1/12 bg-violet-500 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              buttonDisabled={false}
              inputId="viewTx"
              inputPlaceHolder="Enter transaction you want to view"
              inputType="text"
              inputContainerClassName="grow"
            />
          </div>
          <div className="basis-5/6 mt-4 bg-gray-200 p-4 rounded overflow-auto">
            {receipt === "Nothing to show here" ? (
              <p className="text-gray-400">{receipt}</p>
            ) : (
              <pre className="bg-gray-100 p-4 rounded">
                {JSON.stringify(JSON.parse(receipt), null, 2)}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
