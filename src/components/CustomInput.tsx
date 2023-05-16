import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: string;
}

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ labelText, error, ...props }, ref) => {
    return (
      <>
        <div
          className={`${
            error && "animate-shake"
          } relative inline-flex justify-center p-1 border-b-2`}
        >
          <input
            ref={ref}
            {...props}
            type={"text"}
            placeholder=""
            className="w-full pl-2 outline-none focus:ring-0 peer"
          />
          <div className="absolute w-0 h-0.5 transition-all duration-300 border-sky-500 top-full bg-sky-500 peer-focus:w-full"></div>
          <label className="absolute -top-4 transition-all scale-75  duration peer-placeholder-shown:scale-100 peer-placeholder-shown:top-0.5 bg-white peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-slate-500 peer-focus:scale-75 peer-focus:text-sky-500 peer-placeholder-shown:left-1.5 -left-1.5">
            {labelText}
          </label>
        </div>
        {error && (
          <p className={`${error && "animate-shake"} text-red-500`}>{error}</p>
        )}
      </>
    );
  }
);

export default CustomInput;
