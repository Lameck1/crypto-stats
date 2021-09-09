import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({
  arrowIcon, logo, coinName, coinStat,
}) => (
  <li className="item">
    <div className="coin-logo">
      <img className="logo" src={logo} alt={`${coinName}logo`} height="65%" width="65%" />
    </div>
    <div className="coin-details">
      {arrowIcon}
      <span className="details">
        {coinName}
        <br />
        <small>{coinStat.toFixed(2)}</small>
      </span>
    </div>
  </li>
);

ListItem.propTypes = {
  arrowIcon: PropTypes.element.isRequired,
  logo: PropTypes.string.isRequired,
  coinName: PropTypes.string.isRequired,
  coinStat: PropTypes.number.isRequired,
};

export default ListItem;
