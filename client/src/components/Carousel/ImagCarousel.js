import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/actionFront';
import { addToCartUser, removeToCartUser } from '../../redux/actions/actionOrder';

import './_slider.scss';

function imagCarousel({ src, id, products, props }) {
	return (
		<>
			{src === undefined ? (
				<img src={src} className="imgStyles" />
			) : (
				<>
					<h1 className="title-image">New Works !!</h1>
					<Link to={`/product/${id}`}>
						<img src={src} className={props.props ? 'imgStylesInCheckout' : 'imgStyles'} />
					</Link>
				</>
			)}
		</>
	);
}

export default imagCarousel;
