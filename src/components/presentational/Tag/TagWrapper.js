import styled from 'styled-components';

const TagWrapper = styled.li`
  background: #fcfcfc;
  border: 1px solid #ececec;
  border-radius: 30px;
  color: #777;
  display: flex;
  font-size: 11px;
  justify-content: center;
  margin: 2px 5px;
  padding: 5px 10px;
  @media screen and (max-width: 768px) {
    margin: 2px 2px;
    padding: 3px 7px;
  }
`;

export default TagWrapper;
