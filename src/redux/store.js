/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';

import cardListData from '../data/results.json';
import setQueryReducer from './reducers/setQueryReducer';

const defaultStore = {
  query: '',
  cards: cardListData,
};

const store = createStore(
  setQueryReducer,
  defaultStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
