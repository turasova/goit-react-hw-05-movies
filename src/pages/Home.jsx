import { fetchMovies, onFetchError } from 'MoviesApi/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MovieesList/MoviesList';
import { useEffect, useState } from 'react';

const endPoint = '/trending/movie/day';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (films.length > 0) {
      return;
    }

    const getMovies = async () => {
      try {
        setLoading(true);
        const { results } = await fetchMovies(endPoint);
        console.log(results);
        setFilms(results);
      } catch (error) {
        onFetchError();
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
export default Home;
