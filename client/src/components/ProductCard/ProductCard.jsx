import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.styl';

function ProductCard(props) {
  const {
    data: {
      title,
      artist,
      imgurl,
    },
  } = props;

  return (
    <div className="product-card">
      <img src={imgurl} alt="" />
      <h4>{title}</h4>
      <h6>{artist}</h6>
    </div>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
    imgurl: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
