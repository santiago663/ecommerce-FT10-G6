import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/actions/index';
import Loading from '../Loading/Loading';
import SearchBar from '../SearchBar/SearchBar';
import Catalogue from '../Catalogue/Catalogue';
import Pagination from '../Pagination/Pagination';
import Filters from '../Filters/Filters';

import './Browse.styl';

function Browse() {
  const allArtworks = useSelector((store) => store.artworkCache);
  const { loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(12);

  useEffect(() => {
    dispatch(getAllProducts());
    setCards(allArtworks);
  }, []);

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // Change Page Callback
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (loading) {
    return (
      <div className="loader-container">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <SearchBar />
      <Filters 
        setCards={setCards}
      />
      <Catalogue data={currentCards} />
      <Pagination cardsPerPage={cardsPerPage} totalCards={allArtworks.length} paginate={paginate} />
    </div>
  );
}

export default Browse;
