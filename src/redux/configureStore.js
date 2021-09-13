import { configureStore } from '@reduxjs/toolkit';
import reducer from './coins/coins';

const store = configureStore({
  reducer,
});

export default store;
