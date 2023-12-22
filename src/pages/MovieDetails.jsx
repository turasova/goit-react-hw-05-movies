import { fetchMovieDetails, onFetchError } from 'MoviesApi/api';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const endPoint = '/movie';
const defaultImg =
  'https://c8.alamy.com/compfr/g0xxkx/modele-de-conception-de-l-affiche-de-film-concept-vector-illustration-detaillee-g0xxkx.jpg';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  // const location = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {
    // if (!movieId) {
    //   return;
    // }

    const getMoviesDetails = async () => {
      try {
        setLoading(true);
        const { results } = await fetchMovieDetails(endPoint, movieId);
        console.log(results);
        setMovie(results);
      } catch (error) {
        onFetchError();
      } finally {
        setLoading(false);
      }
    };

    getMoviesDetails();
  }, [movieId]);

  // const handelBack = () => {
  //   navigate(location.state ?? '/movies', { state: '' });
  // };
  // if (!movie) {
  //   return;
  // }

  const {
    poster_path,
    title,
    original_title,
    release_date,
    genres,
    vote_average,
    overview,
  } = { movie };

  return (
    <>
      {/* <button onClick={handelBack}>go back</button> */}
      <h2>Movie details</h2>
      {loading && <Loader />}
      {movie && (
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : defaultImg
            }
            alt={title}
            width={250}
          />
          <div>
            {' '}
            <h3>{original_title}</h3>
            <p>
              <b>Release date:</b> {release_date}
            </p>
            <p>
              <b>Genres:</b>{' '}
              {genres.map(({ name }) => `${name.toLowerCase()} | `)}
            </p>
            <p>
              <b>Ranking:</b> {vote_average}
            </p>
            <p>
              <b>Overview:</b> {overview}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default MoviesDetails;
