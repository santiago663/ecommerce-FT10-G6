import React from 'react';
import { Link } from 'react-router-dom';

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