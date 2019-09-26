import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CardList from '../presentational/CardList';
import NoResultMessage from '../presentational/NoResultMessage';
import MainWrapper from '../presentational/MainWrapper';

const getVisibleCards = (cards, query) => {
  if (!query) {
    return cards;
  }

  const filterCallback = item =>
    item.name.indexOf(query) > -1 || item.tags.ndexOf(query) > -1;
  return cards.filter(filterCallback);
};

const mapStateToProps = state => ({
  visibleCards: getVisibleCards(state.cards, state.query.trim()),
});

const CardsContainer = ({ visibleCards }) => {
  if (!visibleCards) {
    return (
      <MainWrapper>
        <NoResultMessage />
      </MainWrapper>
    );
  }
  return <CardList cardListData={visibleCards} />;
};

CardsContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  visibleCards: PropTypes.array,
};

CardsContainer.defaultProps = {
  visibleCards: [],
};

export default connect(mapStateToProps)(CardsContainer);
