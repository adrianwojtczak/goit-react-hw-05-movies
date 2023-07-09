import React, { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'services/fetchData';
import Spinner from 'components/Loader/Loader';

import { Wrapper, Details, GoBack, StyledLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const movieDetails = await fetchMovieDetails(movieId);
    setMovie(movieDetails);
  };

  if (!movie) {
    return <Spinner />;
  }

  const releaseYear = new Date(movie.release_date).getFullYear();
  const userScore = Math.round(movie.vote_average * 10);
  const genreNames = movie.genres.map(genre => genre.name);

  return (
    <Wrapper>
      <GoBack to={sessionStorage.getItem('lastVisitedPage')}>
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 299.021 299.021"
        >
          <path
            d="M292.866,254.432c-2.288,0-4.443-1.285-5.5-3.399c-0.354-0.684-28.541-52.949-146.169-54.727v51.977
          c0,2.342-1.333,4.48-3.432,5.513c-2.096,1.033-4.594,0.793-6.461-0.63L2.417,154.392C0.898,153.227,0,151.425,0,149.516
          c0-1.919,0.898-3.72,2.417-4.888l128.893-98.77c1.87-1.426,4.365-1.667,6.461-0.639c2.099,1.026,3.432,3.173,3.432,5.509v54.776
          c3.111-0.198,7.164-0.37,11.947-0.37c43.861,0,145.871,13.952,145.871,143.136c0,2.858-1.964,5.344-4.75,5.993
          C293.802,254.384,293.34,254.432,292.866,254.432z"
          />
        </svg>
        Go back
      </GoBack>
      <Details>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h1>
            {movie.title} ({releaseYear})
          </h1>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{movie.overview || 'No overview available'}</p>
          <h3>Genres</h3>
          <p>
            {genreNames.length > 0 ? (
              genreNames.map((genre, index) => <span key={index}>{genre}</span>)
            ) : (
              <span>No genres available</span>
            )}
          </p>
        </div>
      </Details>
      <nav>
        <StyledLink to={`/movies/${movieId}/cast`}>Cast</StyledLink>
        <StyledLink to={`/movies/${movieId}/reviews`}>Reviews</StyledLink>
      </nav>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default MovieDetails;
