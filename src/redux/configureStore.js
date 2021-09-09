import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import coinsReducer from './coins/coins';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  coins: coinsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, logger),
);

const persistor = persistStore(store);

export { store, persistor };
