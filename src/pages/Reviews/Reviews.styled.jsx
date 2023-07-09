import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    background-color: lightgray;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 8px;
  }

  h3,
  p {
    margin: 0;
  }
`;
