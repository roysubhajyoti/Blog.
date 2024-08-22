import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const BottomWarning = ({ label, page }) => {
  return (
    <p className="text-base font-semibold text-gray-700 text-center pt-2">
      {label}
      <Link to={`/${page}`} className="underline">
        {page}
      </Link>
    </p>
  );
};

BottomWarning.propTypes = {
  label: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
