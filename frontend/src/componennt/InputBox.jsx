import PropTypes from "prop-types";
export const InputBox = ({ label, placeholder, onChange, type }) => {
  return (
    <div className="p-3">
      <label className="font-semibold text-xl">{label}</label>
      <br />
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="text-lg h-10 rounded-md pl-2 w-full border-black border bg-transparent placeholder-gray-700 dark:placeholder-midnightLite focus:border-blue-700 focus:outline-none focus:border-2 dark:text-white"
      />
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.func.isRequired,
};
