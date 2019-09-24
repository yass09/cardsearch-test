import React from 'react';

import CardWrapper from './CardWrapper';

const Card = ({ card }) => {
  return <CardWrapper card={card}>{card.name}</CardWrapper>;
};

export default Card;
