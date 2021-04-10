import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.styl';

function ProductCard(props) {
  const {
    data: {
      title,
      artist,
      imgurl,
      id,
    },
  } = props;

  return (
    <>
      <Link to={`/product/${id}`}>
        <div className="product-card">
          <img src={imgurl} alt="" />
          <h4>{title}</h4>
          <h6>{artist}</h6>
        </div>
      </Link>
    </>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    artist: PropTypes.string,
    imgurl: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
