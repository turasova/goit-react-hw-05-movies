import { fetchMovieReviews, onFetchError } from 'MoviesApi/api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const endPoint = '/movie';

const Reviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getMovieReviews = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieReviews(endPoint, movieId);
        console.log(data.results);
        setReviews(data.results);
      } catch (error) {
        onFetchError();
      } finally {
        setLoading(false);
      }
    };
    getMovieReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry! We don't have any information about reviews</p>
      )}
    </>
  );
};

export default Reviews;
