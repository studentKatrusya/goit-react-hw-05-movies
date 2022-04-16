import { getMovie } from 'services/apiService';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export default function MovieDetalisPage() {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const onBack = () => {
    console.log('location', location);
    navigate(location.state.from);
  };
  useEffect(() => {
    getMovie(params.id).then(movie => setMovie(movie));
  }, [params.id]);
  return (
    <div>
      <h1>MovieDetalis</h1>
      <button onClick={onBack}>go back</button>
      {movie && (
        <>
          <h2>{movie.title}</h2>
          <img
            src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
            alt={movie.title}
          />
        </>
      )}
    </div>
  );
}
