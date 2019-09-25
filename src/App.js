import React from 'react';

import AppWrapper from './components/presentational/AppWrapper';
import ContentWrapper from './components/presentational/ContentWrapper';
import CardsContainer from './components/containers/CardsContainer';
import SearchBarWrapper from './components/presentational/SearchBarWrapper';

const App = () => {
  return (
    <AppWrapper>
      <ContentWrapper>
        <SearchBarWrapper />
        <CardsContainer />
      </ContentWrapper>
    </AppWrapper>
  );
};

export default App;
