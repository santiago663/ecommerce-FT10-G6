/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderAsc, orderByCategories, orderByAuthor } from '../../redux/actions/actionFront';
import { getAllProducts } from '../../redux/actions/actionBack';
import './Filter.css';

function Filter() {
	const [toggle, setToggle] = useState(false);
	const dispatch = useDispatch();
	const allCategories = useSelector((state) => state.reducerCategories.allCategoriesCache);
	const allArtist = useSelector((state) => state.reducerArtist.allArtistCache);

	const handleFilter = (e) => {e.target.value === 'All' ? dispatch(getAllProducts()) : dispatch(orderByCategories(e.target.value));};

	const handleOrder = (e) => {dispatch(orderAsc(e.target.value));toggle ? setToggle(false) : setToggle(true);};

	const handleAuthor = (e) => {e.target.value === 'All' ? dispatch(getAllProducts()) : dispatch(orderByAuthor(e.target.value));};

	return (
		<div className="filter">
			<p>Filter By Category</p>

			<select onChange={(e) => handleFilter(e)}>
				<option default>All</option>
				{allCategories &&
					allCategories.map((C) => {
						return <option value={C.name}>{C.name}</option>;
					})}
			</select>

			<p>Filter By Author</p>
      
			<select onChange={(e) => handleAuthor(e)}>
				<option default>All</option>
				{allArtist &&
					allArtist.map((a) => {
						return <option value={a.name}>{a.name}</option>;
					})}
			</select>

			<p>Order</p>
			{!toggle ? (
				<button className="fas fa-sort-alpha-down" value="asc_name" onClick={(e) => handleOrder(e)} />
			) : (
				<button className="fas fa-sort-alpha-up" value="desc_name" onClick={(e) => handleOrder(e)} />
			)}
		</div>
	);
}
export default Filter;
