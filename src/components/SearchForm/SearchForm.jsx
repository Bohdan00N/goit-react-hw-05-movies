import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './searchForm.module.scss';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');


  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>

<input 
          onChange={handleChange}                 
          name="searchQuery"
          className={css.searchFormInput}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Write a query"

        />
        <button type="submit" className={css.searchFormButton}>
            Search
        </button>

    </form>
  )
};
SearchForm.propTypes = {onSubmit: PropTypes.func};
export default SearchForm;