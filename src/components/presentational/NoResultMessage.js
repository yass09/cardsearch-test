import React from 'react';
import styled from 'styled-components';

const MessageText = styled.h3``;

const noResultText = 'Aucun résultat trouvé pour votre recherche.';

const NoResultMessage = () => (
  <>
    <MessageText>{noResultText}</MessageText>
  </>
);

export default NoResultMessage;
