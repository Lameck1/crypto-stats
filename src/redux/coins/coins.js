/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCoin, fetchCoins } from './coinStats';

export const getCoinById = createAsyncThunk('coins/getCoinById', async (id) => {
  const selected = await fetchCoin(id);
  return selected.map(({
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
  }));
});

export const getCoins = createAsyncThunk('coins/getCoins', async () => {
  const coins = await fetchCoins();
  return coins.map(({
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
  }));
});

const coinsSlice = createSlice({
  name: 'coins',
  initialState: {
    coins: [],
    status: null,
    selected: [],
  },
  extraReducers: {
    [getCoinById.pending]: (state) => {
      state.status = 'loading';
    },
    [getCoinById.fulfilled]: (state, { payload }) => {
      state.selected = payload;
      state.status = 'success';
    },
    [getCoinById.rejected]: (state) => {
      state.status = 'failed';
    },
    [getCoins.pending]: (state) => {
      state.status = 'loading';
    },
    [getCoins.fulfilled]: (state, { payload }) => {
      state.coins = payload;
      state.status = 'success';
    },
    [getCoins.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default coinsSlice.reducer;
