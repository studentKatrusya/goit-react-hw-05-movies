import { Route, Routes } from 'react-router-dom';
import HomePage from 'Views/Homepage';
import MoviesPage from 'Views/MoviesPage';
import Navigation from './Navigation';
import MovieDetalisPage from 'Views/MovieDetailsPage';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetalisPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
