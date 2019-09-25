import React from 'react';
import { Provider } from 'react-redux';

import AppWrapper from './components/presentational/AppWrapper';
import ContentWrapper from './components/presentational/ContentWrapper';
import CardsContainer from './components/containers/CardsContainer';
import SearchBar from './components/presentational/SeachBar';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <ContentWrapper>
          <SearchBar />
          <CardsContainer />
        </ContentWrapper>
      </AppWrapper>
    </Provider>
  );
};

export default App;
