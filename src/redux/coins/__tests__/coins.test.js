import reducer, { getCoinById, getCoins } from '../coins';

const payload = [
  {
    id: 'bitcoin',
    icon: 'https://static.coinstats.app/coins/Bitcoin6l39t.png',
    name: 'Bitcoin',
    rank: 1,
    priceInUSD: 45146.43320282811,
    priceInBitcoin: 1,
    volume: 29903342654.921547,
    marketCap: 849362962818.6051,
    hourlyPriceChange: -0.33,
  },
];

describe('Coins Reducer', () => {
  const pendingAction = { type: getCoins.pending };
  const fulfilledAction = { type: getCoins.fulfilled, payload };
  const rejectedAction = { type: getCoins.rejected };
  const selectCoinAction = { type: getCoinById.fulfilled, payload };
  const selectCoinRejectedAction = { type: getCoinById.rejected, payload };

  const initialState = {
    coins: [],
    status: null,
    selected: [],
  };

  it('returns the initial state and sets status to "loading"', () => {
    expect(reducer(initialState, pendingAction)).toEqual({
      coins: [],
      status: 'loading',
      selected: [],
    });
  });

  it('loads fulfilled state and sets status to "success"', () => {
    expect(reducer(initialState, fulfilledAction)).toEqual({
      coins: [...payload],
      status: 'success',
      selected: [],
    });
  });
  it('handles rejected action and sets status to "failed"', () => {
    expect(reducer(initialState, rejectedAction)).toEqual({
      coins: [],
      status: 'failed',
      selected: [],
    });
    expect(reducer(initialState, selectCoinRejectedAction)).toEqual({
      coins: [],
      status: 'failed',
      selected: [],
    });
  });
  it('returns selected coin and sets status to "success"', () => {
    expect(reducer(initialState, selectCoinAction)).toEqual({
      coins: [],
      status: 'success',
      selected: [...payload],
    });
  });
});
