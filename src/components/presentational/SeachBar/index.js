import React from 'react';
import SearchBarWrapper from './SearchBarWrapper';
import SearchBarIcon from './SearchBarIcon';
import searchIcon from '../../../assets/search.svg';
import Input from './Input';

const placeholderMessage = 'Que recherchez-vous ?';

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchBarIcon src={searchIcon} alt="" />
      <Input placeholder={placeholderMessage} type="text" />
    </SearchBarWrapper>
  );
};

export default SearchBar;
