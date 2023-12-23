//import { Link, useLocation } from 'react-router-dom';
import css from './MovieItem.module.css';

export const MovieItem = ({
  id,
  title,
  overview,
  poster_path,
  vote_average,
}) => {
  //  const location = useLocation();

  const defaultImg =
    'https://c8.alamy.com/compfr/g0xxkx/modele-de-conception-de-l-affiche-de-film-concept-vector-illustration-detaillee-g0xxkx.jpg';
  return (
    <li key={id} className={css.movieItem}>
      {/* <Link to={`/movies/${id}`} state={{ from: location }}> */}
      <img className={css.filmImages}
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        alt={title}
        width={250}
      />
      <h3>{title}</h3>
      <p>Ranking:{vote_average}</p>
      <p>{overview}</p>
      {/* </Link> */}
    </li>
  );
};
