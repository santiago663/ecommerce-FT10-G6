import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/components/_pagination.scss';

function Pagination({ cardsPerPage, totalCards, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {
          pageNumbers.map((number) => (
            <li key={number} className="page-item'">
              <a onClick={() => paginate(number)} href="#!" className="page-link">{number}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

Pagination.propTypes = {
  cardsPerPage: PropTypes.number.isRequired,
  totalCards: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
