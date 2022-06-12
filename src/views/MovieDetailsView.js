import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { fetchMovieDetails } from '../services/movies-api';
import MovieDetailsPage from '../components/MovieDetailsPage';
import { Spinner } from '../components/Loader';
// import MovieCast from './MovieCast';
// import MovieReviews from './MovieReviews';

const MovieCast = lazy(() => import('./MovieCast' /* webpackChunkName: "movie-cast" */));
const MovieReviews = lazy(() => import('./MovieReviews' /* webpackChunkName: "movie-reviews" */));


function MovieDetailsView() {
    const { movieId } = useParams();
    const { path } = useRouteMatch();
    const [movie, setMovie] = useState(null);

    console.log(movieId);
 
    useEffect(() => {
        fetchMovieDetails(movieId).then(movie => setMovie(movie));
    }, [movieId]);

    console.log(movie);
    
 
    return (
        <div>
            {movie && (
                <MovieDetailsPage movie={movie} />
            )}
            

            <Suspense fallback={<Spinner />}>
                <Switch>
                    <Route path={`${path}/cast`}>
                        <MovieCast movieId={movieId} />
                    </Route>

                    <Route path={`${path}/reviews`}>
                        <MovieReviews movieId={movieId} />
                    </Route>
                </Switch>
            </Suspense>
        </div>
    )
}

export default MovieDetailsView;