import { fetchMovies } from 'MoviesApi/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MovieesList/MoviesList';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (films.length > 0) {
      return;
    }

    const getMovies = async () => {
      try {
        setLoading(true);
        const { results } = await fetchMovies();
        console.log(results);
        setFilms(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [films]);

  return (
    <main>
      <h1>Trending today</h1>
      {loading && <Loader />}
      <MoviesList films={films} />
    </main>
  );
};
