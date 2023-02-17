import getMovieById from '../MoviesApi/MoviesApi';
import { Notify } from 'notiflix';
import { useState, useEffect, useLocation } from 'react';
import { useParams } from 'react-router-dom';
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




}