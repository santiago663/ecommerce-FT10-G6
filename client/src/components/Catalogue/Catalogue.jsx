import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import '../../scss/containers/_catalogue.scss';

function Catalogue() {
  const allProduct = useSelector((store) => store.reducerProduct.allProductCache);
  const loading = useSelector((store) => store.reducerLoading.loading);

  if (loading) {
    return (
      <div className="loader-container">
        <Loading />
      </div>
    );
  }

  return (
    <div className="catalogue-wrapper">
      {
        allProduct && allProduct.map((artwork) => (
          <ProductCard key={artwork.id} data={artwork} />
        ))
      }
    </div>
  );
}

export default Catalogue;
