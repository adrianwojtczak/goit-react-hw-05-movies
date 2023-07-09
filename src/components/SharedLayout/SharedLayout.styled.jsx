import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  background-color: white;
  border: solid 0px;
  border-radius: 4px;
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  nav {
    display: flex;
    gap: 10px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 36px;
  font-weight: bold;
  &.active {
    color: orange;
  }
`;
