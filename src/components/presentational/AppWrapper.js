import styled from 'styled-components';

const AppWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  @media screen and (max-width: 1024px) {
    height: auto;
    min-height: -webkit-fill-available;
  }
`;

export default AppWrapper;
