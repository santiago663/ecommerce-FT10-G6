import React from 'react';
import PropTypes from 'prop-types';

function ProductDetails(props) {
  const {
    data: {
      title,
      artist,
      origin,
      imgurl,
    },
  } = props;

  return (
    <div className="product-wrapper">
      <div className="product-preview">
        <img src={imgurl} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        <h3>{artist}</h3>
        <h3>{origin}</h3>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
    origin: PropTypes.string,
    imgurl: PropTypes.string,
  }).isRequired,
};

export default ProductDetails;
