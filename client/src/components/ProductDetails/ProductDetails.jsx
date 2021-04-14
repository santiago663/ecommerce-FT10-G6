/*eslint-disable*/
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneProduct } from '../../redux/actions/actionBack'
import '../../scss/components/_productDetails.scss';

function ProductDetails() {
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(()=>{
    dispatch(getOneProduct(id))
  }, [])

  const productCache = useSelector(store => store.reducerProduct.productCache)

  let {
    name,
    description,
    price,
    available,
    fileLink,
    preview,
    seriesId,
    authorId,
    categories } = productCache;
  if (available) {
    available = "Available"
  } else {
    available = "Not Available"
  }
  
  return (
    <div className="product-wrapper">
      <div className="product-preview">
        <img className="preview" src={preview} alt={name} />
      </div>
      <div className="detailProd">
        <div className="det">
          <h2>Obra:{name}</h2>
        </div>
        <div className="det">
          <h3>Description:</h3>
          <p className="description">{description}</p>
        </div>
        <div className="det">
          <h3>Artista:{authorId}</h3>
        </div>
        <div className="det">
          <h3>Price:{price}</h3>
        </div>
        <div className="det">
          <h3>{available}</h3>
        </div>
        <div className="det">
          <h3>Categories:</h3>
          {categories?.map(cate => cate.name)}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
