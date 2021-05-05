/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_filter.scss';
import { orderAsc, orderByCategories, orderByAuthor, getBackup } from '../../redux/actions/actionFront';
import { paginate } from '../../redux/actions/request';
import Score from './Score';

function Filter() {
	const [toggle, setToggle] = useState(false);
	const dispatch = useDispatch();
	const allCategories = useSelector((state) => state.reducerCategories.allCategoriesCache);
	const allArtist = useSelector((state) => state.reducerArtist.allArtistCache);
	const selectAuthor = useSelector((state) => state.reducerProduct.author);
	const selectCategorie = useSelector((state) => state.reducerProduct.categorie);
	const disponibleAuthor = useSelector((state) => state.reducerProduct.authorDisponible);
	const disponibleCategories = useSelector((state) => state.reducerProduct.contegorieDisponible);

	const handleFilter = (e) => {
		e.target.value === 'All' ?
			dispatch(getBackup()) :
			dispatch(orderByCategories(e.target.value));
		dispatch(paginate(1))
	};

	const handleOrder = (e) => {
		dispatch(orderAsc(e.target.value));
		toggle ?
			setToggle(false) :
			setToggle(true);
		dispatch(paginate(1))
	};

	const handleAuthor = (e) => {
		e.target.value === 'All' ?
			dispatch(getBackup()) :
			dispatch(orderByAuthor(e.target.value));
		dispatch(paginate(1))
	};

	const handleBackUp = (e) => {
		e.preventDefault();
		dispatch(getBackup());
	};

	return (
		<>
			<div className="Container-Filter">
				<button className="Boton-Reset" onClick={(e) => handleBackUp(e)}>
					{`Reset`}
				</button>
				<div className="filter">
					{
						<>
							<select onChange={(e) => handleFilter(e)}>
								<option default value="All">
									Category
								</option>
								{selectAuthor
									? disponibleCategories &&
									disponibleCategories.map((C, i) => {
										return <option key={`f1${i}`} value={C}>{C}</option>;
									})
									: allCategories &&
									allCategories.map((C, i) => {
										return (
                      <option key={`f2${i}`} value={C.name}>
                        {C.name}
                      </option>
                    );
									})}
							</select>

							<select onChange={(e) => handleAuthor(e)}>
								<option default value="All">
									Author
								</option>
								{!selectCategorie
									? allArtist &&
									allArtist.map((a, i) => {
										return (
                      <option key={`f3${i}`} value={a.name}>
                        {a.name}
                      </option>
                    );
									})
									: disponibleAuthor &&
									disponibleAuthor.map((a, i) => {
										return (
                      <option key={`f4${i}`} value={a}>
                        {a}
                      </option>
                    );
									})}
							</select>
							<Score />
						</>
					}

					{!toggle ? (
						<button className="fas fa-sort-alpha-down" value="asc_name" onClick={(e) => handleOrder(e)} />
					) : (
						<button className="fas fa-sort-alpha-up" value="desc_name" onClick={(e) => handleOrder(e)} />
					)}
				</div>
			</div>
		</>
	);
}
export default Filter;
