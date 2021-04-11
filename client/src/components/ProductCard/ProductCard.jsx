/* eslint-disable  */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { getOneProduct } from '../../redux/actions/index'
import './ProductCard.styl';

function ProductCard(props) {
  const dispatch = useDispatch()
  const {
    data: {
      name,
      author,
      preview,
      id,
    },
  } = props;

  return (
    <>
      <Link onClick={()=>dispatch(getOneProduct(id))} className="link" to={`/products/${id}`}>
        <div className="product-card">
          <img src={preview} alt="" />
          <h4>{name}</h4>
          <h6>{author.name}</h6>
        </div>
      </Link>
    </>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    preview: PropTypes.string,
    author: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductCard;