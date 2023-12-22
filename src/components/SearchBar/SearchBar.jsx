import { Svg } from 'components/Svg/Svg';
import css from './SearchBar.module.css';
import { Header } from 'components/Header/Header';

export const Searchbar = ({ onSubmitSearchBar }) => {
  return (
    <>
      <Header />
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
