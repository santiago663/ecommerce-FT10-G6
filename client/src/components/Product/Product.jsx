import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneProduct } from '../../redux/actions/index';

import ProductDetails from '../ProductDetails/ProductDetails';

function Product() {
  const params = useParams();
  const productData = useSelector((store) => store.productCache);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(parseInt(params.id, 10)));
  }, [dispatch]);

  return (
    <ProductDetails data={productData} />
  );
}

export default Product;
