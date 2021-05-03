/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Products from '../Products/Products';


function Browser() {
	return (
		<div className="bigest-container">
			<Route path="/Browser/Products" component={Products} />
		</div>
	);
}

export default Browser;
