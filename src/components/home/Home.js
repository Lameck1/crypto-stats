import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  FaRegArrowAltCircleRight, FaAngleLeft, FaMicrophone, FaRegSun,
} from 'react-icons/fa';
import List from './List';
import { getCoins } from '../../redux/coins/coins';
import Header from '../header/Header';
import Banner from '../banner/Banner';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);

  const bitcoin = coins.filter((coin) => coin.id === 'bitcoin')[0];
  const { icon, name, priceInUSD } = bitcoin;

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (!coins.length) {
      dispatch(getCoins);
    }
  }, []);

  useEffect(() => {
    const results = coins.filter(
      (coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setSearchResults(results);
  }, [searchTerm]);

  const today = new Date();
  const [day, month, year] = [today.getDate(), today.getMonth(), today.getFullYear()];
  const date = `${day}/${month}/${year}`;

  return (
    <section className="home-section">
      <Header
        backIcon={<FaAngleLeft />}
        date={date}
        text="All stats"
        micIcon={<FaMicrophone />}
        settingsIcon={<FaRegSun />}
      />
      <Banner
        logo={icon}
        coinName={name}
        coinStat={priceInUSD}
        info="Market Leader at: "
      />
      <div className="heading">
        <h5>MARKET PRICE PER CRYPTOCURRENCY (USD)</h5>
      </div>
      <input
        type="text"
        placeholder="Filter by currency name..."
        value={searchTerm}
        onChange={handleChange}
      />
      <List
        coins={searchResults}
        arrowIcon={<FaRegArrowAltCircleRight />}
      />
    </section>

  );
};

export default Home;
