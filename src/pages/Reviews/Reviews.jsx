import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/fetchData';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  console.log('reviews baggining: ', reviews);

  useEffect(() => {
    fetchReviews();
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  const fetchReviews = async () => {
    const movieReviews = await fetchMovieReviews(movieId);
    setReviews(movieReviews);
  };

  console.log('reviews fetch: ', reviews);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map(review => (
        <div key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
