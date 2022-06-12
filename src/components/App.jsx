import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './AppBar';
import Container from './Container';
import { Spinner } from './Loader';

// import HomeView from '../views/HomeView';
// import MoviesView from '../views/MoviesView';
// import MovieDetailsView from '../views/MovieDetailsView';
// import NotFoundView from '../views/NotFoundView';

const HomeView = lazy(() => import('../views/HomeView' /* webpackChunkName: "home-view" */));
const MoviesView = lazy(() => import('../views/MoviesView' /* webpackChunkName: "movies-view" */));
const MovieDetailsView = lazy(() => import('../views/MovieDetailsView' /* webpackChunkName: "movie-details-view" */));
const NotFoundView = lazy(() => import('../views/NotFoundView' /* webpackChunkName: "not-found-view" */));
 
export const App = () => {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path='/' exact>
            <HomeView />
          </Route>

          <Route path='/movies' exact>
            <MoviesView />
          </Route>

          <Route path='/movies/:movieId'>
            <MovieDetailsView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>

        </Switch>
      </Suspense>
    </Container>
  );
};
