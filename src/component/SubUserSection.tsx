import React, { useRef, HTMLProps } from "react";
import ActionWithAddress from "./ActionWithAddress";

interface SubUserSectionProps extends HTMLProps<HTMLInputElement> {
  address: string;
  privateSection: boolean;
}

const SubUserSection = (props: SubUserSectionProps) => {
  const { address, privateSection } = props;

  return (
    <div className="row-span-2 col-span-2 rounded flex flex-col p-1 gap-2 h-full overflow-auto">
      <div className="basis-1/12 break-words text-xs">Address: {address}</div>
      <div className="basis-5/12 flex items-center text-5xl">
        15 {privateSection ? "zkAA" : "AA"}
      </div>
      <div className="basis-3/12 items-center">
        <ActionWithAddress
          buttonName={privateSection ? "Unshield" : "Shield"}
          buttonAction={
            privateSection
              ? () => {
                  console.log("Unshield");
                }
              : () => {
                  console.log("Shield");
                }
          }
          inputId={privateSection ? "unshieldTo" : "shieldTo"}
          inputPlaceHolder={
            privateSection
              ? "Enter address you will unshield to"
              : "Enter address you will shield to"
          }
          inputType="text"
          inputContainerClassName="grow"
        />
      </div>
      <div className="basis-3/12  items-center">
        <ActionWithAddress
          buttonName={privateSection ? "Private Spend" : "Public Spend"}
          buttonAction={
            privateSection
              ? () => {
                  console.log("Private spend");
                }
              : () => {
                  console.log("Public Spend");
                }
          }
          inputId={privateSection ? "privateSpendTo" : "publicSpendTo"}
          inputPlaceHolder={
            privateSection
              ? "Enter address you will spend to"
              : "Enter address you will spend to"
          }
          inputType="text"
          inputContainerClassName="grow"
        />
      </div>
    </div>
  );
};

export default SubUserSection;
