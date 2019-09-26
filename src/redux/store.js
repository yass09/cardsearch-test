/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';

import cardListData from '../data/results.json';

const defaultStore = {
  query: '',
  cards: cardListData,
};

const tempReducer = () => null;

const store = createStore(
  tempReducer,
  defaultStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
