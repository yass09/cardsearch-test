import { createStore } from 'redux';

import cardListData from '../data/results.json';

const defaultStore = cardListData;

const tempReducer = () => null;

const store = createStore(tempReducer, defaultStore);

export default store;
