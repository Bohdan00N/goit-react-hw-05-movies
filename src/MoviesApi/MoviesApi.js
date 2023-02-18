import axios from 'axios';

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'd178e473a587fbce7658ca70e872c0b4',
  },
});
const getTrending = async params => {
  const { data } = await moviesApi.get('trending/movie/day', {
    params,
  });
  return data;
};
const searchMovies = async params => {
  const { data } = await moviesApi.get('search/movie', {
    params,
  });
  return data;
};
const getMovieById = async (id, params) => {
  const { data } = await moviesApi.get(`movie/${id}`, {
    params,
  });
  return data;
};
const getCastById = async (id, params) => {
  const { data } = await moviesApi.get(`movie/${id}/credits`, {
    params,
  });
  return data;
};
const getReviewById = async (id, params) => {
  const { data } = await moviesApi.get(`movie/${id}/reviews`, {
    params,
  });
  return data;
};
export { getTrending, searchMovies, getMovieById, getCastById, getReviewById };
