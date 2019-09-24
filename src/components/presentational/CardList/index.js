import React from 'react';

import CardListWrapper from './CardListWrapper';
import Card from '../Card';
import cardListData from '../../../data/results.json';

const CardList = () => {
  return (
    <CardListWrapper cardListData={cardListData}>
      {cardListData.map(card => {
        return <Card card={card} key={card.id} />;
      })}
    </CardListWrapper>
  );
};

export default CardList;
