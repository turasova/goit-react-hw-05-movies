import { MovieItem } from 'components/MoviesItem/MovieItem';
import css from './MoviesList.module.css';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={css.movieList}>
      {films &&
        films.map(({ id, title, poster_path, vote_average }) => (
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MovieItem
              key={id}
              title={title}
              poster_path={poster_path}
              vote_average={vote_average}
              movieId={id}
            />
          </Link>
        ))}
    </ul>
  );
};
