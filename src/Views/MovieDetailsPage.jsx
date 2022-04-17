import { getMovie } from 'services/apiService';
import { Box, Wrap, Btn, Link } from './MovieDetailsPage.styled';
import { useEffect, useState } from 'react';
import {
  useParams,
  useNavigate,
  //   useLocation,
  Outlet,
} from 'react-router-dom';

export default function MovieDetalisPage() {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();
  //   const location = useLocation();
  const onBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    getMovie(params.id).then(movie => setMovie(movie));
  }, [params.id]);
  return (
    <>
      <Btn type="button" onClick={onBack}>
        Go back
      </Btn>
      <Wrap>
        {movie && (
          <>
            <Box>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                    : `https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg`
                }
                alt={movie.original_title}
              />
            </Box>
            <Box>
              <h2>{movie.original_title}</h2>
              <p>{`Rating ${movie.vote_average}`}</p>
              <h3>Owerview:</h3>
              <p>{movie.overview}</p>

              <div>
                <strong>Ganres: </strong>
                {movie.genres.map(({ id, name }) => (
                  <p key={id}>{name}</p>
                ))}
              </div>
            </Box>
          </>
        )}
      </Wrap>

      <hr />
      <h2>Additional information</h2>
      <Link to="cast">Cast</Link>

      <Link to="reviews">Rewiev</Link>

      <Outlet />
    </>
  );
}
