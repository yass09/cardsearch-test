import styled from 'styled-components';

const SearchBarWrapper = styled.header`
  border: 2px solid #ececec;
  display: flex
  height: 52px;
  margin: 8px;
  max-width: 1530px;
  width: 99%;
  @media screen and (max-width: 1024px) {
    max-width: 747px;
  }
`;

export default SearchBarWrapper;
