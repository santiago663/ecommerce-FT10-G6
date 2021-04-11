import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';

import './Catalogue.styl';

function Catalogue(props) {
  const { data } = props;
  return (
    <div className="catalogue-wrapper">
      {
        data && data.map((artwork) => (
          <ProductCard key={artwork.id} data={artwork} />
        ))
      }
    </div>
  );
}

Catalogue.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Catalogue;
