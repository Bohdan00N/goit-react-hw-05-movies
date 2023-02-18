import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import FilmSearch from '../FindFilm/FindFilm';
import css from './findFilmList.module.scss';

const FilmList = ({ path, title, listFilms }) => {
  const location = useLocation();
  console.log(listFilms);

  return (
    <ul className={css.listFilms}>
      <h1 className={css.listFilmsTitle}>{title}</h1>
      {listFilms.map(film => (
        <Link
          to={`/${path}${film.id}`}
          key={film.id}
          state={{ from: location }}
        >
          <FilmSearch key={film.id} film={film} />
        </Link>
      ))}
    </ul>
  );
};

export default FilmList;
