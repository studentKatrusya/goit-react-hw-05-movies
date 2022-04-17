import { useParams } from 'react-router-dom';
import { List, Item } from './Reviews.styled';
import { useState, useEffect } from 'react';
import { getReview } from 'services/apiService';
export default function Reviews() {
  const params = useParams();

  const [rewiev, setRewiev] = useState(null);

  //   useEffect(() => {
  //     FetchApi.fetchRewiev(id).then(setRewiev);
  //   }, []);
  useEffect(() => {
    getReview(params.id).then(rewiev => setRewiev(rewiev));
  }, [params.id]);

  return (
    <>
      {rewiev &&
        (rewiev.results.length !== 0 ? (
          <List>
            {rewiev.results.map(actor => (
              <Item key={actor.id}>
                <p>
                  <strong>author:</strong> {actor.author}
                </p>

                <p>
                  <strong>content:</strong> {actor.content}
                </p>
              </Item>
            ))}
          </List>
        ) : (
          <h2> We don't have any rewievs for this movie</h2>
        ))}
    </>
  );
}
