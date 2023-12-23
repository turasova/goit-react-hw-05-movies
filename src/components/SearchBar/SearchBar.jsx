import { Svg } from 'components/Svg/Svg';
import css from './SearchBar.module.css';

export const Searchbar = ({ onSubmitSearchBar }) => {
  return (
    <>
      <form className={css.searchForm} onSubmit={onSubmitSearchBar}>
        <button type="submit" className={css.searchFormButton}>
          <Svg />
        </button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="search"
          className={css.searchFormInput}
        />
      </form>
    </>
  );
};
