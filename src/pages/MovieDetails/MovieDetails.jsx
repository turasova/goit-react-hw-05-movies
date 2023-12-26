import { fetchMovieDetails, onFetchError } from 'MoviesApi/api';
import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useRef } from 'react';
import { useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

const endPoint = '/movie';
const defaultImg =
  'https://c8.alamy.com/compfr/g0xxkx/modele-de-conception-de-l-affiche-de-film-concept-vector-illustration-detaillee-g0xxkx.jpg';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const getMoviesDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(endPoint, movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        onFetchError();
      } finally {
        setLoading(false);
      }
    };

    getMoviesDetails();
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <NavLink to={backLinkRef.current} className={css.linkBack}>
        {'<<< back'}
      </NavLink>

      {loading && <Loader />}
      {movie && (
        <div className={css.movieContainer}>
          <div>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title}
              width={250}
              className={css.mivieImg}
            />
          </div>
          <div className={css.movieInfo}>
            <h3 className={css.title}>{movie.title}</h3>
            <p>
              <b>Release date:</b> {movie.release_date}
            </p>
            <p>
              <b>Genres:</b>{' '}
              {movie.genres.map(({ name }) => `${name.toLowerCase()} | `)}
            </p>
            <p>
              <b>Ranking:</b> {movie.vote_average}
            </p>
            <p>
              <b>Overview:</b> {movie.overview}
            </p>
          </div>
        </div>
      )}
      <div className={css.additional}>
        <h3>Additional information:</h3>
        <ul className={css.listAdditional}>
          <li>
            <NavLink to="cast" className={css.link}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={css.link}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default MoviesDetails;
