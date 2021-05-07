import React from 'react';
import '../../scss/containers/_home.scss';
import Particles from 'react-particles-js'
import { Link } from 'react-router-dom'
import Slider from '../Carousel/Image.jsx'

function Home() {

	return (
		<div className="home-wrapper">
			<div className="landing-section">
				<Particles
					id="particles-js"
					params={{
						particles: {
							number: {
								value: 270,
								density: {
									enable: true,
									value_area: 800,
								},
							},
							color: {
								value: '#ffffff',
							},
							shape: {
								type: 'circle',
								stroke: {
									width: 0,
									color: '#000000',
								},
								polygon: {
									nb_sides: 5,
								},
							},
							opacity: {
								value: 0.5,
								random: false,
								anim: {
									enable: false,
									speed: 1,
									opacity_min: 0.1,
									sync: false,
								},
							},
							size: {
								value: 2,
								random: true,
								anim: {
									enable: false,
									speed: 30,
									size_min: 0.1,
									sync: false,
								},
							},
							line_linked: {
								enable: false,
							},
							move: {
								enable: true,
								speed: 3,
								direction: 'top',
								random: false,
								straight: false,
								out_mode: 'out',
								bounce: false,
								attract: {
									enable: false,
									rotateX: 600,
									rotateY: 1200,
								},
							},
						},
					}}
				/>
			</div>
			<div className="botonesqueseio">
				<h1 className="landing-title">
					<span className="title-bg">Become a collector !</span>
					<span className="title-bg"> Support digital artists & </span>
					<span className="title-bg">earn money by holding their art pieces .</span>
				</h1>

				<Link className="linkto" to="/Browser/products">
					<button className="landing-action btn-rounded" type="button">
						Browse Catalogue!
					</button>
				</Link>
			</div>
			<Slider />
		</div>
	);
}

export default Home;
