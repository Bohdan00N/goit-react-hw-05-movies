import {getMovieById} from '../MoviesApi/MoviesApi';
import { Notify } from 'notiflix';
import { useState, useEffect } from 'react';
import { Outlet,useParams, useLocation } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Suspense } from 'react';

const MovieDetails = () => {
const { id } = useParams();
const location = useLocation();
const [title, setTitle] = useState("");
const [poster, setPoster] = useState("");
const [overview, setOverview] = useState("");
const [genres, setGenres] = useState('');
const [popularity, setPopularity] = useState('');
const back = location.state?.from ?? "/movies";


useEffect(() => {
    const MovieDetails = async () => {
        try {
        const response = await getMovieById(id);
        setTitle(response.title);
        setPoster(response.poster_path);    
        setOverview(response.overview);
        setGenres(response.genres.map(genre=>genre.name).join(", "));
        setPopularity(response.popularity); 
        if(response === undefined) {
        Notify.failure('Sorry, there is no information about this movie')
        }
        } catch (error) {
        console.log(error);
        }
        }
        MovieDetails();
}, [id]);

return (
    <>
     <MovieItem title={title} posterPath={poster} popularity={popularity} overview={overview} genres={genres} location={back} />          
            <MovieInfo listTitle="Information" location={back}/> 
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />    
            </Suspense>   
    
    </>
)
}
export default MovieDetails;