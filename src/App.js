import React from 'react';

import AppWrapper from './components/presentational/AppWrapper';
import ContentWrapper from './components/presentational/ContentWrapper';
import CardsContainer from './components/containers/CardsContainer';

const App = () => {
  return (
    <AppWrapper>
      <ContentWrapper>
        <CardsContainer />
      </ContentWrapper>
    </AppWrapper>
  );
};

export default App;
