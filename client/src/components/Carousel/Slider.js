/* eslint-disable  */
import React,{useState} from 'react';
import ImagCarousel from './ImagCarousel'
import { useSelector } from 'react-redux';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

import './_slider.scss';

function Slider() {

	const products = useSelector((state) => state.reducerProduct.allProductCache).slice(24,29);
	let idProduct = [];
	let srcPreview = [];
	let productObject = [];
	products.forEach(x=>{
		srcPreview.push(x.preview)
		idProduct.push(x.id)
		
		;})
	
	let sliderArr = [
		<ImagCarousel src={srcPreview[0]} id={idProduct[0]} products={products[0]} />,
		<ImagCarousel src={srcPreview[1]} id={idProduct[1]} products={products[1]} />,
		<ImagCarousel src={srcPreview[2]} id={idProduct[2]} products={products[2]} />,
		<ImagCarousel src={srcPreview[3]} id={idProduct[3]} products={products[3]} />,
		<ImagCarousel src={srcPreview[4]} id={idProduct[4]} products={products[4]} />,
		
	];
	
	
	
	const [x,setX] = useState(0)
	
	const goLeft = () =>{clearInterval(interval); x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);};
	const goRight = () =>{clearInterval(interval); x === -100*(sliderArr.length-1) ? setX(0) : setX(x - 100)};
	
	// setTimeout(()=>{
	// 	goRight()
	// },5000)
	
	const interval = setInterval(() => {
		goRight()
	}, 5000);
	
	return (
		<div className="slider">
			{sliderArr.map((item, index) => {
				return (
					<div className="slide" key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
						{item}
					</div>
				);
			})}
			<button id="toLeft" onClick={goLeft}>
				<FaAngleDoubleLeft className="icono" />
			</button>
			<button id="toRight" onClick={goRight}>
				<FaAngleDoubleRight className="icono" />
			</button>
		</div>
	);
}

export default Slider;
