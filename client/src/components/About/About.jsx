/* eslint-disable  */
import React, { useState } from 'react';
import '../../scss/components/_about.scss';
import info from './Info';
import MapAbout from './MapAbout';

export default function About() {
	return (
		<div className="Container-Principal">
			<h1 className="Titulo">A little information about the Team</h1>
			<div className="Team-Card">
				{info.map((x) => {return <MapAbout img={x.img} name={x.name} linkedin={x.linkedin} id={x.id} />;})}
			</div>
		</div>
	);
}
