import React from 'react';
import PropTypes from 'prop-types';

import CardListWrapper from './CardListWrapper';
import Card from '../Card';
import MainWrapper from '../MainWrapper';

const CardList = ({ cardListData }) => {
  return (
    <MainWrapper>
      <CardListWrapper cardListData={cardListData}>
        {cardListData.map(card => {
          // eslint-disable-next-line no-underscore-dangle
          return <Card card={card} key={card._id} />;
        })}
      </CardListWrapper>
    </MainWrapper>
  );
};

CardList.propTypes = {
  cardListData: PropTypes.arrayOf(PropTypes.object),
};

CardList.defaultProps = {
  cardListData: [],
};

export default CardList;
