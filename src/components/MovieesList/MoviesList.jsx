import { MovieItem } from 'components/MoviesItem/MovieItem';
import css from './MoviesList.module.css';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={css.movieList}>
      {films &&
        films.map(({ id, title, overview, poster_path }) => (
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MovieItem
              key={id}
              title={title}
              overview={overview}
              poster_path={poster_path}
              movieId={id}
            />
          </Link>
        ))}
    </ul>
  );
};
