import { Route, Routes } from 'react-router-dom';
//import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { fetchMovies } from 'MoviesApi/api';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MoviesDetails } from 'pages/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

// const Home = lazy(() => import('../pages/Home'));
// const Movies = lazy(() => import('../pages/Movies'));
// const MoviesDetails = lazy(() => import('../pages/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  fetchMovies();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MoviesDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
        <Route />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
