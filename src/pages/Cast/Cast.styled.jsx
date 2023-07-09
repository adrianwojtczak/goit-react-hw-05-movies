import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 10px;
  margin-bottom: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;

  img {
    display: block;
    width: 100%;
  }

  h4,
  p {
    text-align: center;
  }
`;
