/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Products from '../Products/Products';


function Browser() {
	return (
		<div className="bigest-container">
			<SearchBar />
			<Route path="/Browser/Products" component={Products} />
		</div>
	);
}

export default Browser;
