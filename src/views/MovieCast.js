import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../services/movies-api';
import Cast from '../components/Cast';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovieCast(movieId)
            .then(response => setCast(response.cast));
    }, [movieId]);
  
    return (
      <Cast cast={cast}/>
  )  
}

export default MovieCast;