import styled from 'styled-components';

const MainWrapper = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 65vh;
  text-align: center;
  @media screen and (max-width: 768px) {
    min-height: 90vh;
  }
`;

export default MainWrapper;
