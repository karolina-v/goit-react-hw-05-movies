import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './AppBar';
import HomeView from '../views/HomeView';
import MoviesView from '../views/MoviesView';
import MovieDetailsView from 'views/MovieDetailsView';
import NotFoundView from 'views/NotFoundView';

 
export const App = () => {
  return (
    <div>
      <AppBar />

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
    </div>
  );
};
