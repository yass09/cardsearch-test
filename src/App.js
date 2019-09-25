import React from 'react';

import AppWrapper from './components/presentational/AppWrapper';
import ContentWrapper from './components/presentational/ContentWrapper';
import CardsContainer from './components/containers/CardsContainer';
import SearchBar from './components/presentational/SeachBar';

const App = () => {
  return (
    <AppWrapper>
      <ContentWrapper>
        <SearchBar />
        <CardsContainer />
      </ContentWrapper>
    </AppWrapper>
  );
};

export default App;
