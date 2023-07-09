import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Placeholder from 'components/Placeholder/Placeholder';

import { fetchMovieCast } from 'services/fetchData';

import { Wrapper, Grid } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (movieId) {
      fetchCast();
    }
  }, [movieId]);

  const fetchCast = async () => {
    const movieCast = await fetchMovieCast(movieId);
    setCast(movieCast);
  };

  const renderProfile = actor => {
    if (actor.profile_path) {
      return (
        <img
          src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
          alt={actor.name}
        />
      );
    } else {
      return <Placeholder />;
    }
  };

  return (
    <Wrapper>
      <Grid>
        {cast.cast && cast.cast.length > 0 ? (
          cast.cast.map(actor => (
            <div key={actor.id}>
              {renderProfile(actor)}
              <h4>{actor.name}</h4>
              <p>{actor.character}</p>
            </div>
          ))
        ) : (
          <p>No cast available</p>
        )}
      </Grid>
    </Wrapper>
  );
};

export default Cast;
