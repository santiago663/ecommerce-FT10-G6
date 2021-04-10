import React, { useState } from 'react';
import './SearchBar.styl';

function SearchBar() {
  const [input, setInput] = useState('');
  const [byArtist, setByArtist] = useState(false);
  const [byArtwork, setByArtwork] = useState(true);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const toggleByArtist = (event) => {
    event.preventDefault();

    if (!byArtist) {
      setByArtist(true);
      setByArtwork(false);
    }
  };

  const toggleByArtwork = (event) => {
    event.preventDefault();

    if (!byArtwork) {
      setByArtist(false);
      setByArtwork(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
            className={byArtwork ? 'btn-rounded searchbar-filters--btn_active' : 'btn-rounded searchbar-filters--btn_inactive'}
            type="button"
            onClick={toggleByArtwork}
          >
            ARTWORK
          </button>

          <button
            className={byArtist ? 'btn-rounded searchbar-filters--btn_active' : 'btn-rounded searchbar-filters--btn_inactive'}
            type="button"
            onClick={toggleByArtist}
          >
            ARTIST
          </button>
        </div>

        {/* <button type="submit">Search!</button> */}
      </form>
    </div>
  );
}

export default SearchBar;
