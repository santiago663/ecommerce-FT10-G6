import React from 'react';
import './_FunctionStar.scss';

const FuncionEstrella = (star) => {
	var estar = { color: 'rgb(251, 255, 0)' };

	if (star === 0) {
		return (
			<>
				<i className="fas fa-star" id="icon5"></i>
				<i className="fas fa-star" id="icon5"></i>
				<i className="fas fa-star" id="icon5"></i>
				<i className="fas fa-star" id="icon5"></i>
				<i className="fas fa-star" id="icon5"></i>
			</>
		);
	}
	if (Math.floor(star) <= 1 && Math.ceil(star) >= 1) {
		return (
			<>
				<i className="fas fa-star" id="icon5" style={estar}></i>
				{star < 2 && star >= 1.5 ? (
					<i className="fas fa-star-half-alt" id="icon5" style={estar}></i>
				) : (
					<i className="fas fa-star" id="icon5"></i>
				)}
				<i className="fas fa-star" id="icon5"></i>
				<i className="fas fa-star" id="icon5"></i>
				<i className="fas fa-star" id="icon5"></i>
			</>
		);
	}
	if (Math.floor(star) <= 2 && Math.ceil(star) >= 2) {
		return (
			<>
				<i className="fas fa-star" id="icon5" style={estar}></i>
				<i className="fas fa-star" id="icon5" style={estar}></i>
				{star < 3 && star >= 2.5 ? (
					<i className="fas fa-star-half-alt" id="icon5" style={estar}></i>
				) : (
					<i className="fas fa-star" id="icon5"></i>
				)}
				<i className="fas fa-star" id="icon5"></i>
				<i className="fas fa-star" id="icon5"></i>
			</>
		);
	}
	if (Math.floor(star) <= 3 && Math.ceil(star) >= 3) {
		return (
			<>
				<i className="fas fa-star" id="icon5" style={estar}></i>
				<i className="fas fa-star" id="icon5" style={estar}></i>
				<i className="fas fa-star" id="icon5" style={estar}></i>
				{star < 4 && star >= 3.5 ? (
					<i className="fas fa-star-half-alt" id="icon5" style={estar}></i>
				) : (
					<i className="fas fa-star" id="icon5"></i>
				)}
				<i className="fas fa-star" id="icon5"></i>
			</>
		);
	}
	if (Math.floor(star) <= 4 && Math.ceil(star) >= 4) {
		return (
			<>
				<i className="fas fa-star" id="icon5" style={estar}></i>
				<i className="fas fa-star" id="icon5" style={estar}></i>
				<i className="fas fa-star" id="icon5" style={estar}></i>
				<i className="fas fa-star" id="icon5" style={estar}></i>
				{star < 5 && star >= 4.5 ? (
					<i className="fas fa-star-half-alt" id="icon5" style={estar}></i>
				) : (
					<i className="fas fa-star" id="icon5"></i>
				)}
			</>
		);
	}
	if (Math.floor(star) <= 5 && Math.ceil(star) >= 5) {
		return (
			<>
				<i className="fas fa-star" id="icon5" style={estar}></i>
				<i className="fas fa-star" id="icon5" style={estar}></i>
				<i className="fas fa-star" id="icon5" style={estar}></i>
				<i className="fas fa-star" id="icon5" style={estar}></i>
				<i className="fas fa-star" id="icon5" style={estar}></i>
			</>
		);
	}
};

export default FuncionEstrella;
