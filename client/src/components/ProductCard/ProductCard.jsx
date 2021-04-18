/* eslint-disable  */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../scss/components/_productCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/actionFront';

function ProductCard(props) {
	const dispatch = useDispatch();
	
	const {
		data: { name, author, preview, id },
	} = props;

	const handleAddToCart = (productOnClick) => {
		let data = JSON.parse(localStorage.getItem('orderProducts')) || [];
		let found = data.filter((product) => product.id === productOnClick.id);

		if (found.length === 0) {
			data.push(productOnClick);
			localStorage.setItem('orderProducts', JSON.stringify(data));
			dispatch(addToCart(productOnClick));
		}
	};

	const handleRemoveFromCart = (productOnClick) => {
		let data = JSON.parse(localStorage.getItem('orderProducts'));
		let found = data.filter((product) => product.id !== productOnClick.id);

		localStorage.setItem('orderProducts', JSON.stringify(found));
		dispatch(removeFromCart(productOnClick));
	};

	return (
		<>
			<Link className="link" to={`/product/${id}`}>
				<div className="product-card">
					<img src={preview} alt="" />
					<h4>{name}</h4>
					<h6>{author.name}</h6>
				</div>
			</Link>
			{JSON.parse(window.localStorage.orderProducts).filter((prod) => prod.id === id).length !== 1 ? (
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
