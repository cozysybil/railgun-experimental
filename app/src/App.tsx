import React, { useEffect, useState } from "react";
import Input from "./component/Input";
import "./App.css";
import SubUserSection from "./component/SubUserSection";
import ActionWithAddress from "./component/ActionWithAddress";

// @ts-ignore
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { getTransactionDetails } from "./services/transaction";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [viewLoading, setViewLoading] = useState(false);
  const [receipt, setReceipt] = useState("Nothing to show here");

  const handleButtonClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
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
        <div className="col-span-2 row-span-2 bg-zinc-100 rounded flex flex-col p-5 grid grid-cols-4 gap-4 h-full">
          <div className="row-span-2 col-span-4 text-sm grid place-items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Account A
            </span>
          </div>
          <SubUserSection
            address={"0xZK00000000000000000000000000000"}
            privateKey={""}
            privateSection={true}
          />
          <SubUserSection
            address={process.env.REACT_APP_A_PUBLIC_KEY || ""}
            privateKey={process.env.REACT_APP_A_PRIVATE_KEY || ""}
            privateSection={false}
          />
        </div>
        <div className="col-span-2 row-span-2 bg-zinc-100 rounded flex flex-col p-5 grid grid-cols-4 gap-4 h-full">
          <div className="row-span-2 col-span-4 text-sm grid place-items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Account B
            </span>
          </div>
          <SubUserSection
            address={"0xZK00000000000000000000000000000"}
            privateKey={""}
            privateSection={true}
          />
          <SubUserSection
            address={process.env.REACT_APP_B_PUBLIC_KEY || ""}
            privateKey={process.env.REACT_APP_B_PRIVATE_KEY || ""}
            privateSection={false}
          />
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
