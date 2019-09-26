import { FILTER_CARDS } from './actionTypes';

const filterCards = filterText => ({
  type: FILTER_CARDS,
  payload: {
    filterText,
  },
});

export default filterCards;
