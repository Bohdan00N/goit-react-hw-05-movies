import { Link } from 'react-router-dom';
import css from './movieItem.module.scss';

export const MovieItem = ({
  location,
  posterPath,
  title,
  popularity,
  overview,
  genres,
}) => {
  return (
    <div className={css.movieItem}>
      <Link to={location} className={css.goBack}>
        <button className={css.btnBack}>Go back</button>
      </Link>
      <div className={css.movieInfoContainer}>
        <img
          className={css.moviePoster}
          src={`https://image.tmdb.org/t/p/original${posterPath}`}
          alt={title}
          width="400"
          height="600"
          loading="lazy"
        />
        <div className={css.movieInfo}>
          <h1 className={css.movieNotes}>{title}</h1>
          <p className={css.movieNotesItem}>User score:{popularity}%</p>
          <h2 className={css.movieNotes}>Overview</h2>
          <p className={css.movieNotesItem}>{overview}</p>
          <h2 className={css.movieNotes}>Genres</h2>
          <p className={css.movieNotesItem}>{genres}</p>
        </div>
      </div>
    </div>
  );
};
