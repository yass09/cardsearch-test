import styled from 'styled-components';

const MainWrapper = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    min-height: 90vh;
  }
`;

export default MainWrapper;
