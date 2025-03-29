import PropTypes from "prop-types";
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useState } from "react";

export const InputPassword = ({ label, placeholder, onChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  const hideShowPassword = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="p-3">
      <label className="font-semibold text-xl">{label}</label>
      <br />
      <div className="flex justify-between gap-1">
        <input
          onChange={onChange}
          placeholder={placeholder}
          type={isVisible ? "text" : "password"}
          className="text-lg h-10 rounded-md pl-2 w-full border-black border bg-transparent placeholder-gray-700 dark:placeholder-midnightLite focus:border-blue-700 focus:outline-none focus:border-2 dark:text-white"
        />
        <button
          type="button"
          onClick={hideShowPassword}
          className="ml-2 text-xl text-gray-900 border border-blue-700 rounded-md px-2 hover:bg-gray-300"
        >
          {isVisible ? <LuEye /> : <LuEyeClosed />}
        </button>
      </div>
    </div>
  );
};

InputPassword.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
