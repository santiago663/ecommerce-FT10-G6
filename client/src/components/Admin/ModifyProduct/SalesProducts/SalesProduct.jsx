/*eslint-disable*/
import React,{useState} from 'react';
import FilterByProduct from './FilterByProduct';
import { useSelector, useDispatch } from 'react-redux';
import './_salesProduct.scss';
import Azza from '../../../Filters/Azza';
import SearchBar from '../../../SearchBar/SearchBar';
import { removeProductForAdmin } from '../../../../redux/actions/actionFront';


const SalesProduct = () =>{
	const allProducts = useSelector((store) => store.reducerProduct.backUpProducts);
	const [input, setInput] = useState([]);

	const handleChange = (e) => {
		if (!input.includes(e.target.value)) {
			setInput([...input, e.target.value]);
		}
	};

function onClose(g) {
	
		//dispatch(removeProductForAdmin(g));
	}

	const Send = () => {
		//dispatch(action at to back (input))
	};
   return (
		<>
			<SearchBar />
			<Azza />
			<tbody>
				<th>
					<h1 className="title">List de productos para aplicar descuento</h1>
				</th>
			</tbody>
			<table id="products">
				<td>
					<FilterByProduct allProducts={allProducts} onChange={handleChange} />
				</td>
				<td>
					<FilterByProduct allProducts={allProducts} onChange={handleChange} />
				</td>
				<td>
					<FilterByProduct allProducts={allProducts} onChange={handleChange} />
				</td>
				<td>Categorie</td>
				<td>Regular Price</td>
				<td>Precio con descuento</td>
				<td>Descuento %</td>
			</table>

			<tbody>
				<th>
					<h1 className="title">List de productos para aplicar descuento</h1>
				</th>
			</tbody>
			<table id="products">
				<tr id="trHeader">
					<td>Delete</td>
					<td>Product Name</td>
					<td>Author Name</td>
					<td>Categorie</td>
					<td>Regular Price</td>
					<td>Precio con descuento</td>
					<td>Descuento %</td>
				</tr>
				{input &&
					[...allProducts].map((g) => {
						
						return (
							<>
								<tr>
									<td>
										<button onClick={() => onClose(g)}>X</button>
									</td>
									<td>{g.name}</td>
									<td>{g.author.name}</td>
									<td>
										{g.categories.map((x) => {
											return x.name;
										})}
									</td>
									<td>{g.price}</td>
									<td>$83</td>
									<td>10</td>
								</tr>
							</>
						);
					})}
			</table>
			<button onClick={() => Send}>OK</button>
		</>
   );
}

export default SalesProduct;