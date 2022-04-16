import { Route, Routes } from 'react-router-dom';
import HomePage from 'Views/Homepage';
import MoviesPage from 'Views/MoviesPage';
import Navigation from './Navigation';
import MovieDetalisPage from 'Views/MovieDetailsPage';

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetalisPage />} />
      </Routes>
    </div>
  );
};
