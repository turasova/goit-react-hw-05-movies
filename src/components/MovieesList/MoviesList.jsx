import css from './MoviesList.module.css';
import { Link, useLocation } from 'react-router-dom';

const defaultImg =
  'https://c8.alamy.com/compfr/g0xxkx/modele-de-conception-de-l-affiche-de-film-concept-vector-illustration-detaillee-g0xxkx.jpg';

export const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={css.movieList}>
      {films &&
        films.map(({ id, title, poster_path, vote_average }) => (
          <li key={id} className={css.movieItem}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                className={css.filmImages}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultImg
                }
                alt={title}
                width={250}
              />
              <div className={css.infoContainer}>
                <h3 className={css.text}>{title}</h3>
                <p className={css.textRanking}>Ranking:{vote_average}</p>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
};
