import PropTypes from "prop-types";

export const SubHeading = ({ label }) => {
  return (
    <div className="text-gray-800 text-lg px-3 text-center font-serif">
      {label}
    </div>
  );
};

SubHeading.propTypes = {
  label: PropTypes.string.isRequired,
};
