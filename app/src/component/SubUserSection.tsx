import React, { useRef, HTMLProps, useState, useEffect } from "react";
import { getBalance, mint } from "../services/coin";
import ActionWithAddress from "./ActionWithAddress";

interface SubUserSectionProps extends HTMLProps<HTMLInputElement> {
  address: string;
  privateSection: boolean;
}

const SubUserSection = (props: SubUserSectionProps) => {
  const { address, privateSection } = props;
  const [tokenBalance, setTokenBalance] = useState("0");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!privateSection) {
        // only public
        const balance = await getBalance(address);
        setTokenBalance(balance);
      }
    };

    fetchData();
  }, [address, privateSection]); // Add address and privateSection to the dependency array

  const handleMintClick = async () => {
    try {
      setLoading(true);
      await mint(address, "10"); // Call the mint function
      setLoading(false);
      // Fetch the updated balance after minting
      const balance = await getBalance(address);
      setTokenBalance(balance);
    } catch (error) {
      console.error("Error minting tokens:", error);
      setLoading(false);
    }
  };

  return (
    <div className="row-span-2 col-span-2 rounded flex flex-col p-1 gap-2 h-full overflow-auto">
      <div className="basis-1/12 break-words text-xs">Address: {address}</div>
      <div className="basis-5/12 flex flex-row items-stretch text-4xl gap-2">
        <div className="py-2 px-0">
          <span>{privateSection ? "15 zkAA" : tokenBalance + " AA"}</span>
        </div>
        <div>
          {!privateSection && (
            <button
              type="submit"
              className="bg-violet-500 text-white text-sm font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
              onClick={handleMintClick}
              disabled={loading}
            >
              {loading ? "Minting..." : "+ request tokens"}
            </button>
          )}
        </div>
      </div>
      <div className="basis-3/12 items-center ">
        <ActionWithAddress
          buttonName={privateSection ? "Unshield" : "Shield"}
          buttonAction={
            privateSection
              ? (value) => {
                  console.log("Unshield to:", value);
                }
              : (value) => {
                  console.log("Shield to:", value);
                }
          }
          buttonContainerClassName={
            privateSection
              ? "basis-1/3 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              : "basis-1/3 bg-violet-500 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          }
          inputId={privateSection ? "unshieldTo" : "shieldTo"}
          inputPlaceHolder={
            privateSection ? "Unshield to address ..." : "Shield to address ..."
          }
          inputType="text"
          inputContainerClassName="grow"
        />
      </div>
      <div className="basis-3/12 items-center">
        <ActionWithAddress
          buttonName={privateSection ? "Private Send" : "Public Send"}
          buttonAction={
            privateSection
              ? (value) => {
                  console.log("Private send to:", value);
                }
              : (value) => {
                  console.log("Public send to:", value);
                }
          }
          buttonContainerClassName={
            privateSection
              ? "basis-1/3 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              : "basis-1/3 bg-violet-500 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          }
          inputId={privateSection ? "privateSendTo" : "publicSendTo"}
          inputPlaceHolder="Send to address ..."
          inputType="text"
          inputContainerClassName="grow"
        />
      </div>
    </div>
  );
};

export default SubUserSection;
