import React from "react";
import Input from "./Input"; // Make sure to adjust the path based on your file structure
import ActionWithAddress from "./ActionWithAddress";

const PublicSection = () => {
  return (
    <div className="row-span-2 col-span-2 bg-zinc-100 rounded flex flex-col p-5">
      <div className="basis-1/12 ">
        Address: 0xPUBLIC0000000000000000000000000
      </div>
      <div className="basis-5/12  flex items-center text-5xl">15 AA</div>
      <div className="basis-3/12 items-center">
        <ActionWithAddress
          buttonName="Shield"
          buttonAction={() => {
            console.log("Shield");
          }}
          inputId="shieldTo"
          inputPlaceHolder="Enter address you will shield to"
          inputType="text"
          inputContainerClassName="grow"
        />
      </div>
      <div className="basis-3/12  items-center">
        <ActionWithAddress
          buttonName="Public Spend"
          buttonAction={() => {
            console.log("Public Spend");
          }}
          inputId="publicSpendTo"
          inputPlaceHolder="Enter address you will spend to"
          inputType="text"
          inputContainerClassName="grow"
        />
      </div>
    </div>
  );
};

export default PublicSection;
