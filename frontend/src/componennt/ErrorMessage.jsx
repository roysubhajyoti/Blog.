import PropTypes from "prop-types";
const ErrorMessage = ({ message }) => {
  return (
    <div>
      <div className="w-48 h-20 bg-transparent/1 shadow-lg text-center text-wrap text-md font-semibold font-serif p-4 rounded-lg border border-red-600 bg-red-300">
        {message}
      </div>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
