import { fetchSearchMovies, onFetchError } from 'MoviesApi/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MovieesList/MoviesList';
import { Searchbar } from 'components/SearchBar/SearchBar';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const endPoint = '/search/movie';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (films.length > 0) {
      return;
    }
    if (searchQuery === '') {
      return;
    }

    const getSearchMovies = async () => {
      try {
        setLoading(true);
        const { results } = await fetchSearchMovies(endPoint, searchQuery);
        console.log(results);
        setFilms(results);
      } catch (error) {
        onFetchError();
      } finally {
        setLoading(false);
      }
    };
    getSearchMovies();
  }, [searchQuery, films]);

  const onSubmitSearchBar = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchValue = form.search.value;

    if (searchValue === '') {
      Notiflix.Notiflix.Notify.info('Enter your request, please!');
      setSearchParams({});
      setFilms([]);
      return;
    }
    if (searchValue === searchQuery) {
      Notiflix.Notify.info('Enter new request, please!');
      return;
    }
    setSearchParams({ query: searchValue });
    setFilms([]);
  };

  return (
    <>
      <Searchbar onSubmitSearchBar={onSubmitSearchBar} />;
      {loading && <Loader />}
      <MoviesList films={films} />
    </>
  );
};
export default Movies;
