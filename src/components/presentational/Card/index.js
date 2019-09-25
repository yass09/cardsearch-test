import React from 'react';
import PropTypes from 'prop-types';

import CardWrapper from './CardWrapper';
import TagList from '../TagList';
import CardTitle from '../CardTitle';

const Card = ({ card }) => {
  return (
    <CardWrapper card={card}>
      <CardTitle>{card.name}</CardTitle>
      <TagList tagListData={card.tags} />
    </CardWrapper>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
};

Card.defaultProps = {
  card: {},
};

export default Card;
