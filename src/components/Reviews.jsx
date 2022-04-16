import { useParams } from 'react-router-dom';
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
          <ul>
            {rewiev.results.map(actor => (
              <li key={actor.id}>
                <h2>author:</h2>
                <p>{actor.author}</p>
                <h2>content:</h2>
                <p>{actor.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h2> We don't have any rewievs for this movie</h2>
        ))}
    </>
  );
}
