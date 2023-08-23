import React from "react";
import ActionWithAddress from "./ActionWithAddress";

const PrivateSection = () => {
  return (
    <div className="row-span-2 col-span-2 bg-zinc-100 rounded flex flex-col p-5">
      <div className="basis-1/12">
        Address: 0xZK00000000000000000000000000000
      </div>
      <div className="basis-5/12  flex items-center text-5xl">20 zkAA</div>
      <div className="basis-3/12 items-center">
        <ActionWithAddress
          buttonName="Unshield"
          buttonAction={() => {
            console.log("Unshield");
          }}
          inputId="unshieldTo"
          inputPlaceHolder="Enter address you will unshield to"
          inputType="text"
          inputContainerClassName="grow"
        />
      </div>
      <div className="basis-3/12  items-center">
        <ActionWithAddress
          buttonName="Private Spend"
          buttonAction={() => {
            console.log("Private spend");
          }}
          inputId="privateSpendTo"
          inputPlaceHolder="Enter address you will spend to"
          inputType="text"
          inputContainerClassName="grow"
        />
      </div>
    </div>
  );
};

export default PrivateSection;
