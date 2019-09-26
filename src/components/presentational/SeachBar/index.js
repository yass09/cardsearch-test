import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchBarWrapper from './SearchBarWrapper';
import SearchBarIcon from './SearchBarIcon';
import searchIcon from '../../../assets/img/search.svg';
import Input from './Input';
import setQueryAction from '../../../redux/actions/setQueryActionCreator';

const placeholderMessage = 'Que recherchez-vous ?';

const mapStateToProps = state => ({
  query: state.query,
});

const mapDispatchToProps = dispatch => ({
  setQuery: text => dispatch(setQueryAction(text)),
});

const SearchBar = ({ query, setQuery }) => {
  const onChangeHandler = event => {
    const newValue = event.target.value;
    setTimeout(setQuery(newValue), 200);
  };

  return (
    <SearchBarWrapper>
      <SearchBarIcon src={searchIcon} alt="" />
      <Input
        name="filter"
        placeholder={placeholderMessage}
        type="text"
        onChange={onChangeHandler}
        value={query}
      />
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  query: '',
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
