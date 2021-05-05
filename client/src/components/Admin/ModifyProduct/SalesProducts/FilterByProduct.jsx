import React from 'react';

const FilterByProduct = (props) => {
	return (
		<>
			<select value={props.allProducts} onChange={props.handleChange} >
				<option default value={'uno'}>
					All Products
				</option>

				{props.allProducts &&
					props.allProducts.map((G, i) => {
						return (
							<option key={i} value={G.name}>
								{G.name}
							</option>
						);
					})}
			</select>
		</>
	);
};

export default FilterByProduct;
