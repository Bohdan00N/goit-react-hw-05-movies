import { getTrending } from '../MoviesApi/MoviesApi';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import FilmList from '../components/FindFilmList/FindFilmList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    try {
      const response = await getTrending();
      setMovies(response.results);
      if (response.length > 0) {
        Notify.failure('No movies found');
      }
    } catch (error) {
      Notify.failure('Try to refresh the page');
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <FilmList title={'Trending list'} path="movies/" listFilms={movies} />
    </>
  );
};
export default Home;
