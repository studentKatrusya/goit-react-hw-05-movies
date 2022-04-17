import SearchForm from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/apiService';
import MoviesList from 'components/MoviesList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const param = searchParams.get('query');
  useEffect(() => {
    if (param) {
      getSearchMovie(param).then(res => setMovies(res));
      setQuery(param);
    }
  }, [param]);
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
    getSearchMovie(query).then(res => setMovies(res));
  };

  const handleSetQuery = e => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <h1>Search Movies</h1>
      <SearchForm
        handleSetQuery={handleSetQuery}
        handleSubmit={handleSubmit}
        value={query}
      />
      <MoviesList movies={movies} />
    </div>
  );
}
