/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderStar, getBackup, choiseStar } from '../../redux/actions/actionFront';
import { paginate } from '../../redux/actions/request';
import './_filter.scss';

function Score() {
	const [toggle, setToggle] = useState(false);
	const dispatch = useDispatch();
	const actualStars = useSelector((state) => state.reducerProduct.actualStars);
	const selectAuthor = useSelector((state) => state.reducerProduct.author);
	const selectCategorie = useSelector((state) => state.reducerProduct.categorie);

	const handleStar = (e) => {
		dispatch(orderStar(e.target.value));
		dispatch(paginate(1))
		toggle ?
			setToggle(false) :
			setToggle(true);
	};

	const handleChoiseStar = (e) => {
		e === 'All' ? dispatch(getBackup()) : (dispatch(paginate(1)), dispatch(choiseStar(e)));
	};

	return (
		<>
			<select onChange={(e) => handleChoiseStar(e.target.value)}>
				<option value="All">Stars</option>
				{selectAuthor || selectCategorie ? (
					actualStars.map((s) => {
						return <option value={s}>{s}</option>;
					})
				) : (
					<>
						<option value="0">0</option>
						<option value="1">1</option>
						<option vlaue="2">2</option>
						<option value="3">3</option>
						<option vlaue="4">4</option>
						<option value="5">5</option>
					</>
				)}
			</select>

			<div className="Container-Iconos">
				{selectAuthor || selectCategorie ? (
					''
				) : toggle ? (
					<button value="starUp" className="far fa-star " id="star" onClick={(e) => handleStar(e)}></button>
				) : (
					<button value="starDown" className="fas fa-star" id="star" onClick={(e) => handleStar(e)}></button>
				)}
			</div>
		</>
	);
}
export default Score;
