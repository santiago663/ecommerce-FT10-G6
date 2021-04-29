/*eslint-disable*/
import React from 'react';

const ChangeColorStar = (props) => {
	function changeColor(num) {
		let icono = document.querySelector(`#icons${num}`);

		if (icono.style.color == 'rgb(251, 255, 0)') {
			if (num === 1) {
				props.onChange(0);
				let stars = document.querySelector('#icons1');
				stars.style.color = 'rgb(95, 95, 45)';
			}

			[1, 2, 3, 4, 5].forEach((x) => {
				if (x > num) {
					let stars = document.querySelector(`#icons${x}`);
					stars.style.color = 'rgb(95, 95, 45)';
				}
			});
		} else {
			[1, 2, 3, 4, 5].forEach((x) => {
				if (x <= num) {
					let stars = document.querySelector(`#icons${x}`);
					stars.style.color = 'rgb(251, 255, 0)';
				}
			});
		}

		return false;
	}

	return (
		<>
			<i
				className="fas fa-star"
				id="icons1"
				onClick={() => {
					props.onChange(1), changeColor(1);
				}}
			></i>
			<i
				className="fas fa-star"
				id="icons2"
				onClick={() => {
					props.onChange(2), changeColor(2);
				}}
			></i>
			<i
				className="fas fa-star"
				id="icons3"
				onClick={() => {
					props.onChange(3), changeColor(3);
				}}
			></i>
			<i
				className="fas fa-star"
				id="icons4"
				onClick={() => {
					props.onChange(4), changeColor(4);
				}}
			></i>
			<i
				className="fas fa-star"
				id="icons5"
				onClick={() => {
					props.onChange(5), changeColor(5);
				}}
			></i>
		</>
	);
};

export default ChangeColorStar;
