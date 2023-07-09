import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Spinner from 'components/Loader/Loader';

import { Container, Header, StyledLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
