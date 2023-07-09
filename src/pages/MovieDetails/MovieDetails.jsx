import React, { useEffect, useState } from 'react';
import {
  Link,
  useParams,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { fetchMovieDetails } from 'services/fetchData';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const movieDetails = await fetchMovieDetails(movieId);
    setMovie(movieDetails);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  const releaseYear = new Date(movie.release_date).getFullYear();
  const userScore = Math.round(movie.vote_average * 10);
  const genreNames = movie.genres.map(genre => genre.name);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Link onClick={handleGoBack}>Go back</Link>
      <h1>
        {movie.title} ({releaseYear})
      </h1>
      <p>User Score: {userScore}%</p>
      <p>Overview</p>
      <p>{movie.overview}</p>
      <p>Genres</p>
      <p>{genreNames}</p>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <nav>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
