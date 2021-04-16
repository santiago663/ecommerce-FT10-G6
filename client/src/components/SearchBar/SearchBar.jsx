/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchByTitle } from '../../redux/actions/actionBack';
import { setActive } from '../../redux/actions/request'
import '../../scss/components/_searchBar.scss';

function SearchBar() {
  const [input, setInput] = useState('');
  const activeButton = useSelector((store) => store.reducerLoading.activeButton)
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    activeButton === "1" && dispatch(searchByTitle(input));
    // crear acion para buscar por nombre
  };
  
  const buttonHandleChange=(e) =>{
    e.preventDefault()
    dispatch(setActive(e.target.value))
  }
  return (
    /* ------------ */
    /* SEARCH INPUT */
    /* ------------ */

    <div className="wrapper searchbar-wrapper">
      <form onSubmit={handleSubmit} action='#'>

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
          <button type="submit" className="btn-rounded searchbar-filters--btn_active search-button"><i class="fas fa-search"></i></button>
          <button
            className={activeButton === "1" ? "btn-rounded searchbar-filters--btn_active" : "btn-rounded searchbar-filters--btn_inactive " }
            type="submit"
            value={1}
            onClick={(e)=>{buttonHandleChange(e)}}
          >
            Products
          </button>
          <button
            className={activeButton === "2" ? "btn-rounded searchbar-filters--btn_active" : "btn-rounded searchbar-filters--btn_inactive " }
            type="submit"
            value={2}
            onClick={(e)=>{buttonHandleChange(e)}}
          >
            Series
          </button>
          <button
            className={activeButton === "3" ? "btn-rounded searchbar-filters--btn_active" : "btn-rounded searchbar-filters--btn_inactive " }
            type="submit"
            value={3}
            onClick={(e)=>{buttonHandleChange(e)}}
          >
            Authors
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
