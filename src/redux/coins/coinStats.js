const COINS_URL = 'https://api.coinstats.app/public/v1/coins';

const fetchCoins = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const response = await fetch(COINS_URL, requestOptions);
  const result = await response.json();
  const { coins } = result;
  return coins;
};

export default fetchCoins;
