/* eslint-disable  */
import React, { useEffect, useSate } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../scss/components/_productCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/actionFront';

const itemLocal = localStorage.getItem('items')

function ProductCard(props) {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
  const {data: {name,author,preview,id,},} = props;

  

  

  useEffect(() => {
   // if(shoppingCart.length === 0){
   let data = localStorage.getItem('items')
      dispatch(addToCart(JSON.parse(data)))
   // }
  }, []);
   useEffect(() =>{
      localStorage.setItem('items', JSON.stringify(shoppingCart))
   },[shoppingCart])

  return (
		<>
			<Link className="link" to={`/product/${id}`}>
				<div className="product-card">
					<img src={preview} alt="" />
					<h4>{name}</h4>
					<h6>{author.name}</h6>
				</div>
			</Link>
			{!shoppingCart.includes(props.data) ? (
				<i className="fas fa-cart-plus add" onClick={() => dispatch(addToCart(props.data))}></i>
			) : (
				<i className="fas fa-shopping-cart remove" onClick={() => dispatch(removeFromCart(props.data))}>
					<br />
				</i>
			)}
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
