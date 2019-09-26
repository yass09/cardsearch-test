import { SET_FILTER_TEXT } from './actionTypes';

const setFilterText = filterText => ({
  type: SET_FILTER_TEXT,
  payload: {
    filterText,
  },
});

export default setFilterText;
