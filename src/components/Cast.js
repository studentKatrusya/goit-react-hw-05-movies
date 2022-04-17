import { useState, useEffect } from 'react';
import { getCast } from 'services/apiService';
import { useParams } from 'react-router-dom';
import { List, Item, Image } from './Cast.styled';

export default function Cast() {
  const params = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    getCast(params.id).then(setCast);
  }, [params.id]);

  return (
    <>
      {cast && (
        <List>
          {cast.cast.map(actor => (
            <Item key={actor.id}>
              <Image
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : `https://st4.depositphotos.com/14953852/22772/v/200/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg`
                }
                alt={actor.original_name}
              />
              <p>{actor.original_name}</p>
              <p>{actor.character}</p>
            </Item>
          ))}
        </List>
      )}
    </>
  );
}
