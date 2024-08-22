import PropTypes from "prop-types";

export const Button = ({ name, onClick }) => {
  return (
    <div className="text-center text-white px-3 mt-2 ">
      <button
        onClick={onClick}
        className="w-full py-1.5 px-3 bg-gray-950 cursor-pointer text-lg font-semibold font-serif rounded-lg   hover:shadow-lg hover:bg-indigo-600"
      >
        {name}
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
