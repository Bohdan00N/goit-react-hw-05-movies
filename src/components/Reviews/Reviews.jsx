import { useState, useEffect } from 'react';
import { getReviewById } from '../../MoviesApi/MoviesApi';
import css from './reviews.module.scss';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  // const fetchReviews = useCallback(
  //       async () => {
  //       try {
  //         const response = await getReviewById(movieId);
  //         const { review } = response.data;
  //         setReviews(review);
  //         console.log(review);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     },[movieId]);
  //      useEffect(() => {
  //       fetchReviews();
  //     }, [fetchReviews]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviewById(movieId);
        setReviews(reviews.results);
        console.log(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  },
    [movieId]);

  return (
    <ul className={css.reviews}>
      {reviews.length > 0 ? (
        reviews.map(rev => (
          <li className={css.reviews} key={rev.id}>
            <span className={css.autor}>Autor: {rev.author}.</span>
            <p className={css.rev_content}>{rev.content}</p>
          </li>
        ))
      ) : (
        <span>Sorry, we don't have any reviews.</span>
      )}
    </ul>
  );
};
export default Reviews;
