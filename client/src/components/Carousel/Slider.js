/* eslint-disable  */
import React, { useState, useEffect } from 'react';
import ImagCarousel from './ImagCarousel';
import { useSelector } from 'react-redux';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import Loading from '../Loading/Loading';
import './_slider.scss';

function Slider(props) {
	const loading = useSelector((store) => store.reducerLoading.loading);
	const products = useSelector((state) => state.reducerProduct.allProductCache);
	let fondo = 'https://cdn.discordapp.com/attachments/829710868413546511/829924062276485121/face.jpg';
	let idProduct = [];
	let srcPreview = [];
	let productObject = [];
	products.forEach((x) => {
		srcPreview.push(x.preview);
		idProduct.push(x.id);
	});
 let sliderArr;
	props.props
		? (sliderArr = [
				<ImagCarousel />,
				<ImagCarousel src={srcPreview[26]} id={idProduct[26]} products={products[26]} props={props} />,
				<ImagCarousel />,
				<ImagCarousel src={srcPreview[29]} id={idProduct[29]} products={products[29]} props={props} />,
				<ImagCarousel />,
				<ImagCarousel src={srcPreview[5]} id={idProduct[5]} products={products[5]} props={props} />,
				<ImagCarousel />,
				<ImagCarousel src={srcPreview[25]} id={idProduct[25]} products={products[25]} props={props} />,
				<ImagCarousel />,
				<ImagCarousel src={srcPreview[98]} id={idProduct[98]} products={products[98]} props={props} />,
				<ImagCarousel />,
				<ImagCarousel src={srcPreview[36]} id={idProduct[36]} products={products[36]} props={props} />,
		  ])
		: (sliderArr = [
				
				<ImagCarousel src={srcPreview[0]} id={idProduct[0]} products={products[0]} props={props} />,
				<ImagCarousel src={srcPreview[1]} id={idProduct[1]} products={products[1]} props={props} />,
				<ImagCarousel />,
				<ImagCarousel src={srcPreview[2]} id={idProduct[2]} products={products[2]} props={props} />,
				<ImagCarousel src={srcPreview[3]} id={idProduct[3]} products={products[3]} props={props} />,
				<ImagCarousel />,
				<ImagCarousel src={srcPreview[4]} id={idProduct[4]} products={products[4]} props={props} />,
		  ]);

	const [autoPlay, setAutoPlay] = useState(true);
	const [x, setX] = useState(0);
	let interval;

	

	useEffect(()=>{

	return()=> clearInterval(interval)
	},[])
props.props ? (interval = setInterval(() => {goRight();}, 5000)): null;

	const goRight = () => {
		clearInterval(interval);
		x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
	};

	const goLeft = () => {
		
		x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
	};

	if (loading) {
		return (
			<div className="loader-container">
				<Loading />
			</div>
		);
	}
	return (
		<div className={props.props ? 'sliderHome' : 'slider'}>
			{sliderArr.map((item, index) => {
				return (
					<div
						key={index}
						className={props.props ? 'slideHome' : 'slide'}
						style={{ transform: `translateX(${x}%)` }}
					>
						{item}
					</div>
				);
			})}
			<div>
				{props.props ? (
					<div></div>
				) : (
					<>
						<button id="toLeft" onClick={goLeft}>
							<FaAngleDoubleLeft className="icono" />
						</button>
						<button id="toRight" onClick={goRight}>
							<FaAngleDoubleRight className="icono" />
						</button>
					</>
				)}
			</div>
		</div>
	);
}

export default Slider;
