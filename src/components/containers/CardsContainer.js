import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CardList from '../presentational/CardList';
import NoResultMessage from '../presentational/NoResultMessage';
import MainWrapper from '../presentational/MainWrapper';

const mapStateToProps = state => ({
  cards: state.cards,
});

const CardsContainer = ({ cards }) => {
  if (!cards) {
    return (
      <MainWrapper>
        <NoResultMessage />
      </MainWrapper>
    );
  }
  return <CardList cardListData={cards} />;
};

CardsContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cards: PropTypes.object,
};

CardsContainer.defaultProps = {
  cards: [],
};

export default connect(mapStateToProps)(CardsContainer);
