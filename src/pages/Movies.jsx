import  SearchForm  from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'MoviesApi/MoviesApi';
import  FilmList  from 'components/FindFilmList/FindFilmList';

const Movies = () => {
  const [films, setFilms] = useState([]);
  
  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get('query');

  useEffect(() => {
    if(!query){return}
    const fetchData = async () => {
      try {
        const {results} = await searchMovies({query});
        setFilms(results);
        if (results.length === 0 && query !== '') {
          Notify.failure(
            'Sorry, there are no films matching your search query. Please try again.'
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query]);
  

  const onSubmitSearchForm = filterForm => {
    setSearchParams({query: filterForm});
    setFilms([]);
    
  };

  return (
    <>
      <SearchForm onSubmit={onSubmitSearchForm} />
      <FilmList title={''} path="movies/" listFilms={films} query={query} />
    </>
  );
};

export default Movies;
