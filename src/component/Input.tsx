import React, { useRef, HTMLProps } from 'react'; // Import HTMLProps

interface InputProps extends HTMLProps<HTMLInputElement> {
  id: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  placeholder?: string;
  type?: string;
  error?: boolean;
  errorText?: string;
  required?: boolean;
}

const Input = (props: InputProps) => {
  const {
    id,
    containerClassName = '',
    labelClassName = '',
    inputClassName = '',
    placeholder = '',
    type = 'text',
    error = false,
    errorText = '',
    required = false,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null); // Provide the correct type

  return (
    <div className={containerClassName} onClick={() => inputRef.current?.focus()}>
      <div
        className={`border transition duration-150 ease-in-out ${
          error
            ? 'focus-within:border-red border-red'
            : 'focus-within:border-primary border-gray-gray4'
        }`}
      >
        <input
          ref={inputRef}
          type={type}
          className={`w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md ${inputClassName}`}
          id={id}
          placeholder={placeholder}
          {...rest}
        />
      </div>
      {errorText && (
        <p className='text-xs pl-2	text-red mb-4'>{errorText}</p>
      )}
    </div>
  );
};

export default Input;
