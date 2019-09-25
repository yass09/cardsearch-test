import styled from 'styled-components';

const CardWrapper = styled.li`
  align-items: center;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
  border: 1px #f5f5f5;
  display: flex;
  flex-basis: 22%;
  flex-direction: column;
  height: 90px;
  justify-content: space-between;
  list-style: none;
  margin: 8px;
  padding: 10px;
  max-width: 350px;
  @media screen and (max-width: 768px) {
    flex-basis: 44%;
    height: 70px;
  }
  @media screen and (max-width: 480px) {
    flex-basis: 90%;
  }
`;

export default CardWrapper;
