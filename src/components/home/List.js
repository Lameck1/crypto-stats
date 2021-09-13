import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';
import './List.css';

const List = ({
  coins, arrowIcon,
}) => (
  <ul className="grid">
    {coins.map(({
      id, icon, name, priceInUSD,
    }) => (
      <Link to={`/coins/${id}`} key={id}>
        <ListItem
          key={id}
          arrowIcon={arrowIcon}
          logo={icon}
          coinName={name}
          coinStat={priceInUSD}
        />
      </Link>
    ))}
  </ul>
);

List.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string,
    rank: PropTypes.number,
    priceInUSD: PropTypes.number,
    priceInBitcoin: PropTypes.number,
    volume: PropTypes.number,
    marketCap: PropTypes.number,
    hourlyPriceChange: PropTypes.number,
  })).isRequired,
  arrowIcon: PropTypes.element.isRequired,
};

export default List;
