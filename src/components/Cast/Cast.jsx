import { fetchMovieCast, onFetchError } from 'MoviesApi/api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const endPoint = '/movie';
const defaultImg =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxfJjcnwlmKlhfVHfbN_p0ccN6osHKMokMBAI2N-Ta44cL9hlNcx7wzC7j64JkXZ8IAgM&usqp=CAU';

const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getMovieCast = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieCast(endPoint, movieId);
        console.log(data.cast);
        setCast(data.cast);
      } catch (error) {
        onFetchError();
      } finally {
        setLoading(false);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {cast.length !== 0 ? (
        <ul className={css.listCast}>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id} className={css.itemCast}>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImg
                }
                alt="name"
                width={150}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry! We don't have any information about cast</p>
      )}
    </>
  );
};

export default Cast;
