/*eslint-disable*/
import React,{useState} from 'react';
import FilterByProduct from './FilterByProduct';
import { useSelector } from 'react-redux';

const SalesProduct = () =>{
	const allProducts = useSelector((store) => store.reducerProduct.backUpProducts);
	const [input, setInput] = useState([]);

	const handleChange = (e) => {
		if (!input.includes(e.target.value)) {
			setInput([...input, e.target.value]);
		}
	};

function onClose(g) {
		setInput(input.filter((c) => c !== g));
	}

   return (
		<>
			<FilterByProduct allProducts={allProducts} handleChange={handleChange} />
			<div className="divAP">
				<h1>HOLA</h1>
			</div>
			
			{input.map((g) => {
				return (
					<>
						<div >
							<button onClick={() => onClose(g)} >
								X
							</button>
							<p >{g}</p>
						</div>
					</>
				);
			})}
		</>
  );
}

export default SalesProduct;