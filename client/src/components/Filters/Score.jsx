/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderStar, getBackup, choiseStar } from '../../redux/actions/actionFront';
import './_Filter.scss';

function Score() {
	const [toggle, setToggle] = useState(false);
	const dispatch = useDispatch();
   const selectAuthor = useSelector((state) => state.reducerProduct.allProductCache);
   
   useState(()=>{

   },[selectAuthor])

const handleStar = (e) => {
	toggle ? setToggle(false) : setToggle(true);
	dispatch(orderStar(e.target.name));
   dispatch(getBackup());
};

const handleChoiseStar = (e)=>{
	e === 'All' ? dispatch(getBackup()) : dispatch(choiseStar(e));
	
	
}

	return (
		<>
			
				
					<select onChange={(e) => handleChoiseStar(e.target.value)}>
						<option value="All">Stars</option>
						<option value="1">1</option>
						<option vlaue="2">2</option>
						<option value="3">3</option>
						<option vlaue="4">4</option>
						<option value="5">5</option>
					</select>
				
				<div className="Container-Iconos">
					{toggle ? (
						<button
							name="starUp"
							className="far fa-star "
							id="star"
							onClick={(e) => handleStar(e)}
						></button>
					) : (
						<button
							name="starDown"
							className="fas fa-star"
							id="star"
							onClick={(e) => handleStar(e)}
						></button>
					)}
				</div>
			
		</>
	);
}
export default Score;
