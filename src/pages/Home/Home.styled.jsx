import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 0 10px;
  background-color: white;
  margin-bottom: 20px;

  h1 {
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;

  img {
    display: block;
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;

  h3 {
    text-align: center;
    color: black;
  }
`;
