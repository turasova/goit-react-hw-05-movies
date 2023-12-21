import { MovieItem } from 'components/MoviesItem/MoviesItem';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <>
      {films &&
        films.map(({ id, title, overview, poster_path }) => (
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MovieItem
              key={id}
              title={title}
              overview={overview}
              poster_path={poster_path}
            />
          </Link>
        ))}
    </>
  );
};
