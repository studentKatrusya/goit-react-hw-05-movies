import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
//import HomePage from 'Views/HomePage';
//import MoviesPage from 'Views/MoviesPage';
//import Navigation from './Navigation';
//import MovieDetailsPage from 'Views/MovieDetailsPage';
//import Cast from './Cast';
//import Reviews from './Reviews';

const HomePage = lazy(() => import('../Views/HomePage'));
const MoviesPage = lazy(() => import('../Views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../Views/MovieDetailsPage'));
const Navigation = lazy(() => import('./Navigation'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
