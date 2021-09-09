import fetchCoins from './coinStats';

const LOAD_COINS = 'crypto-stats/load-coins';

export const loadCoins = (payload) => ({
  type: LOAD_COINS,
  payload,
});

export const getCoins = async (dispatch) => {
  const coins = await fetchCoins();
  if (coins) {
    dispatch(loadCoins(coins.map(({
      id, icon, name, rank, price: priceInUSD, priceBtc: priceInBitcoin,
      volume, marketCap, priceChange1h: hourlyPriceChange,
    }) => ({
      id,
      icon,
      name,
      rank,
      priceInUSD,
      priceInBitcoin,
      volume,
      marketCap,
      hourlyPriceChange,
    }))));
  }
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_COINS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
