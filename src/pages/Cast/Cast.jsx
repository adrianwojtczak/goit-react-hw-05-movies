import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from 'services/fetchData';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  console.log('Cast begining:', cast);

  useEffect(() => {
    if (movieId) {
      fetchCast();
    }
  }, [movieId]);

  const fetchCast = async () => {
    const movieCast = await fetchMovieCast(movieId);
    setCast(movieCast);
  };

  console.log('Cast fetch:', cast);

  return (
    <div>
      <h2>Cast</h2>
      {cast.cast &&
        cast.cast.map(actor => (
          <div key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>{actor.character}</p>
          </div>
        ))}
    </div>
  );
};

export default Cast;
