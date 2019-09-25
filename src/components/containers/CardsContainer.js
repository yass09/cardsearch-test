import React from 'react';

import CardList from '../presentational/CardList';
import cardListData from '../../data/results.json';

const CardsContainer = () => <CardList cardListData={cardListData} />;

export default CardsContainer;
