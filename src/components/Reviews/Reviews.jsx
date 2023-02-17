import { useState, useEffect } from 'react';
import { getReviewById } from '../../MoviesApi/MoviesApi';
import css from './reviews.module.scss';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await getReviewById(id);
        setReviews(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [id]);

  return (
    <ul className={css.reviews}>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li className={css.reviews} key={review.id}>
            <span className={css.autor}>Autor: {review.author}.</span>
            <p className="{css.rev_content}">{review.content}</p>
          </li>
        ))
      ) : (
        <span>Sorry, we don't have any reviews</span>
      )}
    </ul>
  );
};
export default Reviews;
