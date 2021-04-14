/*eslint-disable*/
import React from 'react';
import { useDispatch } from 'react-redux'
import { paginate } from '../../redux/actions/request';
import '../../scss/components/_pagination.scss';

function Pagination({ cardsPerPage, totalCards }) {
  const dispatch = useDispatch()
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
              <a onClick={() => dispatch(paginate(number))} href="#!" className="page-link">{number}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Pagination;
