import PropTypes from "prop-types";

export const TransferSuccessful = ({ message }) => {
  return (
    <div>
      <div className="w-52 h-12 bg-transparent/1 shadow-lg text-center text-lg font-semibold font-serif p-2 rounded-lg border border-fuchsia-400 ">
        {message}
        <div className="w-48 h-1 rounded-lg bg-pink-400 to-transparent animate-slidebg"></div>
      </div>
    </div>
  );
};
TransferSuccessful.propTypes = {
  message: PropTypes.string,
};
