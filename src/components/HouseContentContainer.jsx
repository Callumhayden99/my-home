import HouseContent from "./HouseContent";
import PropTypes from "prop-types";

const HouseContentContainer = ({ filters }) => {
  return <HouseContent filters={filters} />;
};

HouseContentContainer.propTypes = {
  filters: PropTypes.shape({
    houseType: PropTypes.string,
    price: PropTypes.string,
    bedrooms: PropTypes.string,
    bathrooms: PropTypes.string,
    garden: PropTypes.string,
    garage: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default HouseContentContainer;