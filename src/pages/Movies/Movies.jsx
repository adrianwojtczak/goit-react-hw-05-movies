import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { searchMovies } from 'services/fetchData';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(navigate);
  console.log(location);

  const handleSearch = ev => {
    ev.preventDefault();
    navigate(`/movies?query=${searchTerm}`);
  };

  console.log('query: ', searchTerm); // Wywołanie tablicy wyników

  const searchQuery = new URLSearchParams(location.search).get('query') || '';

  useEffect(() => {
    if (searchQuery) {
      fetchMovies(searchQuery);
    }
  }, [searchQuery]);

  const fetchMovies = async query => {
    const searchedMovies = await searchMovies(query);
    setSearchedMovies(searchedMovies);
  };

  return (
    <div>
      <h1>Movie Search</h1>
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
          {searchedMovies.map(movie => (
            <div key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
