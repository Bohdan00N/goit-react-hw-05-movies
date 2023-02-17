import { useState, useEffect} from 'react';
import { getCastById } from 'MoviesApi/MoviesApi';
import { useParams } from 'react-router-dom';
import css from './cast.module.scss';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

//   const fetchCast = useCallback(
//     async () => {
//     try {
//       const response = await getCastById(movieId);
//       const { Cast } = response.data;
//       setCast(Cast);
//     } catch (error) {
//       console.log(error);
//     }
//   },[movieId]);
//    useEffect(() => {
//     fetchCast();
//   }, [fetchCast]);
    useEffect(() => {
      const fetchCast = async () => {
        try {
          const response = await getCastById(movieId);
          const { Cast } = response.data;
          setCast(Cast);
        } catch (error) {
          console.log(error);
        }
      };
      fetchCast();
    }, [movieId]);
  return (
    <div className={css.cast}>
      {cast.length > 0 ? (
        cast.map(actor => (
          <div className={css.actor} key={actor.credir_id}>
            <img
              className={css.actorImg}
              src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
              alt={actor.name}
              loading="lazy"
              width="100"
              height="150"
            />
            <p>{actor.name}</p>
            <p className={css.actorImg}>Character: {actor.character}</p>
          </div>
        ))
      ) : (
        <span>Sorry, we don't have any casts</span>
      )}
    </div>
  );
};
export default Cast;
