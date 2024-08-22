import PropTypes from "prop-types";
export const Header = ({ label }) => {
  return (
    <div className="text-4xl text-center pb-5 font-bold font-serif">
      {label}
    </div>
  );
};

Header.propTypes = {
  label: PropTypes.string.isRequired,
};
