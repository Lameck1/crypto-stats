import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  FaRegArrowAltCircleRight, FaAngleLeft, FaMicrophone, FaRegSun,
} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { getCoinById } from '../../redux/coins/coins';
import Header from '../header/Header';
import Banner from '../banner/Banner';
import './Details.css';

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { selected } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCoinById(id));
  }, []);

  return (
    <section className="details-section">
      {selected.map(({
        icon, name, priceInUSD, rank, volume, marketCap, priceInBitcoin, hourlyPriceChange,
      }) => (
        <div key="details">
          <Header
            key="header"
            backIcon={<FaAngleLeft />}
            text={`${name} stats`}
            micIcon={<FaMicrophone />}
            settingsIcon={<FaRegSun />}
          />
          <Banner
            key="banner"
            logo={icon}
            coinName={name}
            coinStat={priceInUSD}
            info="Market Price (USD): "
            details
          />
          <div className="heading">
            <h5>{`${name} today's live stats`.toLocaleUpperCase()}</h5>
          </div>
          <ul key="coinStats" className="coin-stats">
            <li className="stat" key={`rank-${rank}`}>
              <span>Rank</span>
              <div>
                <span>{rank}</span>
                <FaRegArrowAltCircleRight />
              </div>
            </li>
            <li className="stat" key={volume}>
              <span>Volume</span>
              <div>
                <span>{volume.toFixed(2)}</span>
                <FaRegArrowAltCircleRight />
              </div>
            </li>
            <li className="stat" key={marketCap}>
              <span>Market Cap</span>
              <div>
                <span>{marketCap.toFixed(2)}</span>
                <FaRegArrowAltCircleRight />
              </div>
            </li>
            <li className="stat" key={priceInBitcoin}>
              <span>Price in Bitcoin</span>
              <div>
                <span>{priceInBitcoin.toFixed(2)}</span>
                <FaRegArrowAltCircleRight />
              </div>
            </li>
            <li className="stat" key={hourlyPriceChange}>
              <span>Hourly Price Change</span>
              <div>
                <span>{hourlyPriceChange.toFixed(2)}</span>
                <FaRegArrowAltCircleRight />
              </div>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Details;
