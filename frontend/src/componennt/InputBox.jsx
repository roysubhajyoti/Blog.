import PropTypes from "prop-types";
export const InputBox = ({ label, placeholder, onChange }) => {
  return (
    <div className="p-3">
      <label className="font-semibold text-xl">{label}</label>
      <br />
      <input
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="text-lg h-10 rounded-md pl-2 w-full border-black border bg-transparent placeholder-gray-700 focus:border-blue-700 focus:outline-none focus:border-2"
      />
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
