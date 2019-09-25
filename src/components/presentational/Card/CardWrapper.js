import styled from 'styled-components';

const CardWrapper = styled.li`
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
  border: 1px #f5f5f5;
  margin: 8px;
  padding: 10px;
  list-style: none;
  flex-basis: 20%;
  @media screen and (max-width: 768px) {
    flex-basis: 40%;
  }
  @media screen and (max-width: 480px) {
    flex-basis: 80%;
  }
`;

export default CardWrapper;
