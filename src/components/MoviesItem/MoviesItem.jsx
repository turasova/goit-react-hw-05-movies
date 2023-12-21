export const MovieItem = ({ id, title, overview, poster_path }) => {
  return (
    <li key={id}>
      <img
        src={
          poster_path
            ? `http://image.tmdb.org/t/p/w154${poster_path}`
            : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'
        }
        alt={title}
      />
      <h3>{title}</h3>
      <p>{overview}</p>
    </li>
  );
};
