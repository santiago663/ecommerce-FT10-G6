/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByTitle } from '../../redux/actions/index';
import '../../scss/components/_searchBar.scss';

function SearchBar() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchByTitle(input));
    // crear acion para buscar por nombre
  };

  return (
    /* ------------ */
    /* SEARCH INPUT */
    /* ------------ */

    <div className="wrapper searchbar-wrapper">
      <form onSubmit={handleSubmit}>

        <label htmlFor="input">
          <input
            className="searchbar-input"
            type="text"
            name="input"
            value={input}
            autoComplete="off"
            placeholder="Browse our gallery..."
            onChange={handleInputChange}
          />
        </label>

        {/* FILTER: SEARCH ARTWORK OR AUTHOR */}

        <div className="searchbar-filters">
          <button
            className="btn-rounded searchbar-filters--btn_active"
            type="submit"
          >
            Search!
          </button>
        </div>

      </form>
    </div>
  );
}

export default SearchBar;
