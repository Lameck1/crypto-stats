import { useSelector } from 'react-redux';
import {
  FaRegArrowAltCircleRight, FaAngleLeft, FaMicrophone, FaRegSun,
} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import Banner from '../banner/Banner';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const coin = useSelector((state) => state.coins.filter((coin) => coin.id === id));

  const { icon, name, priceInUSD } = coin[0];

  return (
    <section className="details-section">
      <Header
        backIcon={<FaAngleLeft />}
        text={`${name} stats`}
        micIcon={<FaMicrophone />}
        settingsIcon={<FaRegSun />}
      />
      <Banner
        logo={icon}
        coinName={name}
        coinStat={priceInUSD}
        info="Market Price (USD): "
        details
      />
      <div className="heading">
        <h5>{`${name} today's live stats`.toLocaleUpperCase()}</h5>
      </div>

      {coin.map(({
        rank, volume, marketCap, priceInBitcoin, hourlyPriceChange,
      }) => (
        <ul key={rank} className="coin-stats">
          <li className="stat">
            <span>Rank</span>
            <div>
              <span>{rank}</span>
              <FaRegArrowAltCircleRight />
            </div>
          </li>
          <li className="stat">
            <span>Volume</span>
            <div>
              <span>{volume.toFixed(2)}</span>
              <FaRegArrowAltCircleRight />
            </div>
          </li>
          <li className="stat">
            <span>Market Cap</span>
            <div>
              <span>{marketCap.toFixed(2)}</span>
              <FaRegArrowAltCircleRight />
            </div>
          </li>
          <li className="stat">
            <span>Price in Bitcoin</span>
            <div>
              <span>{priceInBitcoin.toFixed(2)}</span>
              <FaRegArrowAltCircleRight />
            </div>
          </li>
          <li className="stat">
            <span>Hourly Price Change</span>
            <div>
              <span>{hourlyPriceChange.toFixed(2)}</span>
              <FaRegArrowAltCircleRight />
            </div>
          </li>
        </ul>
      ))}
    </section>
  );
};

export default Details;
