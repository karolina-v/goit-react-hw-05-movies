import { useState, useEffect } from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { fetchMovieDetails, imageURL } from '../services/movies-api';
import MovieDetailsPage from '../components/MovieDetailsPage';


function MovieDetailsView() {
    const { movieId } = useParams();
    const { url, path } = useRouteMatch();
    const [movie, setMovie] = useState(null);
 

    useEffect(() => {
        fetchMovieDetails(movieId).then(movie => setMovie(movie));
    }, [movieId]);

 
    return (
        <div>
            <MovieDetailsPage movie={movie} />

            <Switch>
                <Route path={`${path}/cast`}>
                    <MovieCast movieId={movieId} />
                </Route>

                <Route path={`${path}/reviews`}>
                    <MovieReviews movieId={movieId} />
                </Route>
            </Switch>
        </div>
    )
}

export default MovieDetailsView;