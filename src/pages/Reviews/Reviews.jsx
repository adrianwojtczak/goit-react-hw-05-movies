import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/fetchData';

import { Wrapper } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const movieReviews = await fetchMovieReviews(movieId);
    setReviews(movieReviews);
  };

  return (
    <Wrapper>
      {reviews.length === 0 ? (
        <p>No reviews available</p>
      ) : (
        reviews.map(review => (
          <div key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))
      )}
    </Wrapper>
  );
};

export default Reviews;
