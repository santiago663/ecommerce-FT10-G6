/* eslint-disable  */
import React,{useState,useEffect} from 'react';
import ImagCarousel from './ImagCarousel'
import { useSelector } from 'react-redux';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import Loading from '../Loading/Loading';
import './_slider.scss';

function Slider(props) {
	const loading = useSelector((store) => store.reducerLoading.loading);
	const products = useSelector((state) => state.reducerProduct.allProductCache)

	let japanese = products.filter((x) => 'Japanese Art' !== x.name);
	let fondo = "https://cdn.discordapp.com/attachments/829710868413546511/829924062276485121/face.jpg"
	let idProduct = [];
	let srcPreview = [];
	let productObject = [];
	products.forEach(x=>{
		if ('Japanese Art' === x.name){
			srcPreview.push(x);
			
		} 
		
		;})
	console.log('esto se muestra en la linea 18 :', srcPreview);
	let sliderArr = [
		<ImagCarousel />,
		<ImagCarousel src={srcPreview[0].preview} id={srcPreview[0].id} products={products[0]} props={props} />,
		<ImagCarousel />,
		// <ImagCarousel src={srcPreview} id={idProduct[1]} products={products[1]} props={props} />,
		// <ImagCarousel />,
		// <ImagCarousel src={srcPreview} id={idProduct[2]} products={products[2]} props={props} />,
		// <ImagCarousel />,
		// <ImagCarousel src={srcPreview[3]} id={idProduct[3]} products={products[3]} props={props} />,
		// <ImagCarousel />,
		// <ImagCarousel src={srcPreview[4]} id={idProduct[4]} products={products[4]} props={props} />,
	];
	
	
	const[autoPlay,setAutoPlay] = useState(true)
	const [x,setX] = useState(0)
	
	let interval= setInterval(() => {
					goLeft()
			}, 5000)
	// const functionSlider = () =>{
	// 	setAutoPlay(false)
	// 	autoPlay
	// 		? (interval = setInterval(() => {
	// 				goRight();
	// 		}, 5000))
	// 		: clearInterval(interval);
	// }
	
	
	const goRight = () =>{clearInterval(interval);
	x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);};

	const goLeft = () =>{clearInterval(interval);
	 x === -100*(sliderArr.length-1) ? setX(0) : setX(x - 100)};
	

	

	if (loading) {
		return (
			<div className="loader-container">
				<Loading />
			</div>
		);
	}
	return (
		<div className={props.props? 'sliderHome' : 'slider'}>
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
				<button id="toLeft" onClick={goLeft} >
					<FaAngleDoubleLeft className="icono" />
				</button>
				<button id="toRight" onClick={goRight}>
					<FaAngleDoubleRight className="icono" />
				</button>
			</div>
		</div>
	);
}

export default Slider;
