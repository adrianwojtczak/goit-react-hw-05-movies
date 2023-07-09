import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { searchMovies } from 'services/fetchData';
import Placeholder from 'components/Placeholder/Placeholder';

import { Wrapper, Grid, StyledLink } from './Movies.styled';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const searchQuery = new URLSearchParams(location.search).get('query') || '';

  useEffect(() => {
    if (searchQuery) {
      fetchMovies(searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    sessionStorage.setItem(
      'lastVisitedPage',
      location.pathname + location.search
    );
  }, [location.pathname, location.search]);

  const handleSearch = ev => {
    ev.preventDefault();
    navigate(`/movies?query=${searchTerm}`);
  };

  const fetchMovies = async query => {
    const searchedMovies = await searchMovies(query);
    setSearchedMovies(searchedMovies);
  };

  const renderPoster = movie => {
    if (movie.poster_path) {
      return (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      );
    } else {
      return <Placeholder />;
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={ev => setSearchTerm(ev.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>

      {searchedMovies.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <Grid>
            {searchedMovies.map(movie => (
              <div key={movie.id}>
                <StyledLink to={`/movies/${movie.id}`}>
                  {renderPoster(movie)}
                  <h3>{movie.title}</h3>
                </StyledLink>
              </div>
            ))}
          </Grid>
        </div>
      )}
    </Wrapper>
  );
};

export default Movies;
