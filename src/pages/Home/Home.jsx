import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/fetchData';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const trendingMovies = await fetchTrendingMovies();
    setMovies(trendingMovies);
  };

  console.log(movies); // Wywołanie tablicy filmów

  return (
    <div>
      <h1>Trending Movies</h1>
      {movies.map(movie => (
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
  );
};

export default Home;
