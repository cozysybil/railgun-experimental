import React, { useRef, HTMLProps } from "react"; // Import HTMLProps
import Input from "./Input"; // Make sure to adjust the path based on your file structure

interface ActionWithAddressProps extends HTMLProps<HTMLInputElement> {
  buttonName: string;
  buttonAction: () => void;
  inputId: string;
  inputPlaceHolder: string;
  inputType: string;
  inputContainerClassName?: string;
}

const ActionWithAddress = (props: ActionWithAddressProps) => {
  const {
    buttonName,
    buttonAction,
    inputId,
    inputPlaceHolder,
    inputType,
    inputContainerClassName = "",
  } = props;

  return (
    <div className="flex flex-row gap-2 items-center">
      <Input
        id={inputId}
        placeholder={inputPlaceHolder}
        type={inputType}
        containerClassName={inputContainerClassName}
        required
      />
      <button
        type="submit"
        onClick={buttonAction}
        className="basis-1/3 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {buttonName}
      </button>
    </div>
  );
};

export default ActionWithAddress;
