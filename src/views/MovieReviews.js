import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../services/movies-api';
import Reviews from '../components/Reviews';

function ReviewsCast() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId)
            .then(response => setReviews(response.reviews));
    }, [movieId]);

    return (
      <Reviews reviews={reviews} />
  )  
}

export default ReviewsCast;