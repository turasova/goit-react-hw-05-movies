import { MovieItem } from 'components/MoviesItem/MovieItem';
import css from './MoviesList.module.css';

export const MoviesList = ({ films }) => {
  return (
    <ul className={css.movieList}>
      {films &&
        films.map(({ id, title, overview, poster_path }) => (
          <MovieItem
            key={id}
            title={title}
            overview={overview}
            poster_path={poster_path}
          />
        ))}
    </ul>
  );
};
