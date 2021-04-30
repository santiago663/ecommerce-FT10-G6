/* eslint-disable  */
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const MapAbout = ({ img, name, linkedin, id }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [photo, setPhoto] = useState(false);

	const handlePhoto = () => {
		setPhoto(!photo);
	};

	const handleclick = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<div className="Card" key={id}>
			<ReactCardFlip isFlipped={photo} flipDirection="horizontal">
				<div className="Imagen">
					<img src={img} alt="" onMouseEnter={handlePhoto} className="Img" />
				</div>

				<div className="Imagen">
					<a href={linkedin} target="_blanck" className="link">
						<i className="fab fa-linkedin" onMouseLeave={handlePhoto}></i>
					</a>
				</div>
			</ReactCardFlip>

			<div className="Info-Container">
				<div className="Container-Interno">
					<h3 className="Name">{name}</h3>

					<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
						<div>
							Lorem Ipsum is simply dummy text of the printing and
							<br />
							typesetting industry. Lorem Ipsum has been the industry'
							<br />
							standard dummy text ever since the 1500s, when an unknown <br />
							printer took a galley of type and scrambled it to make a type
							<br />
							<button onClick={handleclick}>English</button>
						</div>
						<div>
							Lorem Ipsum is simply dummy text of the printing and
							<br />
							typesetting industry. Lorem Ipsum has been the industry'
							<br />
							standard dummy text ever since the 1500s, when an unknown <br />
							printer took a galley of type and scrambled it to make a type
							<br />
							<button onClick={handleclick}>Español</button>
						</div>
					</ReactCardFlip>
				</div>
			</div>
		</div>
	);
};

export default MapAbout;
