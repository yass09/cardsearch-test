import React from 'react';
import PropTypes from 'prop-types';

import CardListWrapper from './CardListWrapper';
import Card from '../Card';

const CardList = ({ cardListData }) => {
  return (
    <CardListWrapper cardListData={cardListData}>
      {cardListData.map(card => {
        return <Card card={card} key={card.id} />;
      })}
    </CardListWrapper>
  );
};

CardList.propTypes = {
  cardListData: PropTypes.arrayOf(PropTypes.object),
};

CardList.defaultProps = {
  cardListData: [],
};

export default CardList;
