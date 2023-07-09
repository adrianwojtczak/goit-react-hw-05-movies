import styled from 'styled-components';

import { NavLink, Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 20px 10px;
  background-color: white;
  margin-bottom: 20px;

  nav {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
`;

export const Details = styled.div`
  padding: 10px;
  margin-top: 10px;
  display: flex;
  gap: 10px;

  h1 {
    margin: 0 0 30px;
  }

  h3 {
    margin: 30px 0 0;
  }

  p {
    margin: 10px 0 0;
    display: flex;
    gap: 10px;
  }
`;

export const GoBack = styled(Link)`
  border: solid gray 1px;
  border-radius: 4px;
  background-color: lightgray;
  padding: 10px;
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  gap: 10px;
  width: fit-content;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  &.active {
    color: orange;
  }
`;
