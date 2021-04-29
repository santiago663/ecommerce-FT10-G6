/* eslint-disable  */
import React,{useState} from 'react';
import chawi from '../../image/nahuel.jpeg';
import '../../scss/components/_about.scss';
import info from './Info'
import ReactCardFlip from 'react-card-flip';

export default function About() {


  const [isFlipped, setIsFlipped] = useState(false);
  const [photo,setPhoto] = useState(false);
  const handlePhoto = () =>{
	  setPhoto(!photo)
  }
	const handleclick = () => {
		setIsFlipped(!isFlipped);
	};



	return (
		<div className="Container-Principal">
			<h1 className="Titulo">A little information about the Team</h1>
			<div className="Team-Card">
				
          {
            info.map((x)=>{
					console.log(x.linkedin)
              return (
					<>
						<div className="Card" key={x.id}>
							<div className="Imagen">
								<ReactCardFlip isFlipped={handlePhoto} flipDirection="vertical">
									<div onClick={handlePhoto}>
										<img src={x.img} alt="" className="Img" />
									</div>
									<div onMouseLeave={handlePhoto}>
										<a
											href={x.linkedin}
											onMouseLeave={handlePhoto}
											target="_blanck"
											className="link"
										>
											<i className="fab fa-linkedin"></i>
										</a>
									</div>
								</ReactCardFlip>
							</div>
							<div className="Info-Container">
								<div className="Container-Interno">
									<h3 className="Name">{x.name}</h3>
									<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
										<div >
											Lorem Ipsum is simply dummy text of the printing and
											<br />
											typesetting industry. Lorem Ipsum has been the industry'
											<br />
											standard dummy text ever since the 1500s, when an unknown <br />
											printer took a galley of type and scrambled it to make a type
											<br />
											<button onClick={handleclick}>Read in Inglish</button>
										</div>
										<div >
											Lorem Ipsum is simply dummy text of the printing and
											<br />
											typesetting industry. Lorem Ipsum has been the industry'
											<br />
											standard dummy text ever since the 1500s, when an unknown <br />
											printer took a galley of type and scrambled it to make a type
											<br />
											<button onClick={handleclick}>Leer en Español</button>
										</div>
									</ReactCardFlip>
								</div>
							</div>
						</div>
					</>
				);
            })
          }
				</div>

			
			</div>
		
	);
}
