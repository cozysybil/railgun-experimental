import React, { useEffect, useState } from "react";
import Input from "./component/Input";
import "./App.css";
import SubUserSection from "./component/SubUserSection";
import ActionWithAddress from "./component/ActionWithAddress";

function App() {
  return (
    <div className="w-full h-screen bg-slate-900">
      <div className="grid grid-cols-4 grid-rows-6 gap-4 h-full p-5">
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
            privateSection={true}
          />
          <SubUserSection
            address={"0xPUBLIC0000000000000000000000000"}
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
            privateSection={true}
          />
          <SubUserSection
            address={"0xPUBLIC0000000000000000000000000"}
            privateSection={false}
          />
        </div>
        <div className="col-span-4 row-span-5 bg-zinc-100 rounded flex flex-col p-5">
          <div className="basis-1/6 flex items-center">
            <ActionWithAddress
              buttonName="View"
              buttonAction={() => {
                console.log("View transaction");
              }}
              buttonContainerClassName="basis-1/12 bg-violet-500 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              inputId="viewTx"
              inputPlaceHolder="Enter transaction you want to view"
              inputType="text"
              inputContainerClassName="grow"
            />
          </div>
          <div className="basis-5/6 mt-4 bg-gray-200 p-4 rounded overflow-auto">
            <p className="text-gray-400">Nothing to show here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
