/* eslint-disable  */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../scss/components/_productCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/actionFront';

function ProductCard(props) {
	const dispatch = useDispatch();
	const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
	const {
		data: { name, author, preview, id },
	} = props;


	const handleAddToCart = (productOnClick) => {
		dispatch(addToCart(productOnClick));
		localStorage.setItem(productOnClick.id, JSON.stringify(productOnClick));
	};

	const handleRemoveFromCart = (productOnClick) => {
		dispatch(removeFromCart(productOnClick));
		localStorage.removeItem(productOnClick.id);
	};

	
  return (
    <>
      <div className="product-card">
        <Link className="link" to={`/product/${id}`}>
          <img src={preview} alt="" />
        </Link>
        <h4>{name}</h4>
        <h6>{author.name}</h6>
      </div>
      {shoppingCart && !shoppingCart.includes(props.data) ? (
				<i className="fas fa-cart-plus add" key={id} onClick={() => handleAddToCart(props.data)}></i>
			) : (
				<i className="fas fa-shopping-cart remove" key={id} onClick={() => handleRemoveFromCart(props.data)}>
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
