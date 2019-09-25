import React from 'react';

import CardList from '../presentational/CardList';
import cardListData from '../../data/results.json';
import NoResultMessage from '../presentational/NoResultMessage';
import MainWrapper from '../presentational/MainWrapper';

const CardsContainer = () => {
  if (!cardListData) {
    return (
      <MainWrapper>
        <NoResultMessage />
      </MainWrapper>
    );
  }
  return <CardList cardListData={cardListData} />;
};

export default CardsContainer;
