import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/fetchData';

import { Wrapper, Grid, StyledLink } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
    sessionStorage.setItem('lastVisitedPage', window.location.pathname);
  }, []);

  const fetchMovies = async () => {
    const trendingMovies = await fetchTrendingMovies();
    setMovies(trendingMovies);
  };

  return (
    <Wrapper>
      <h1>Trending Movies</h1>
      <Grid>
        {movies.map(movie => (
          <div key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </StyledLink>
          </div>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Home;
