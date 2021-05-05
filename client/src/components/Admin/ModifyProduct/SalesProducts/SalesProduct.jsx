/*eslint-disable*/
import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './_salesProduct.scss';
import Azza from '../../../Filters/Azza';
import SearchBar from '../../../SearchBar/SearchBar';
import { removeProductForAdmin, deletAllProductsSales, getBackup } from '../../../../redux/actions/actionFront';


const SalesProduct = () =>{
	const dispatch = useDispatch()
	const allProducts = useSelector((store) => store.reducerProduct.adminProducts);
	const [input, setInput] = useState([]);

	

function onClose(g) {
	dispatch(removeProductForAdmin(g));
	}
	const Delete = () =>{
		dispatch(deletAllProductsSales())
	}
	const Send = () => {
		//dispatch(action at to back (input))
	};
	const getAll = () =>{
		dispatch(getBackup());
	}
	let num = 1;
   return (
		<>
			<tbody>
				<th>
					<h1 className="title">List de productos para aplicar descuento</h1>
				</th>
			</tbody>

			<table id="products">
				<td>
					<SearchBar />
					<Azza />
				</td>
				<td></td>
				<td onClick={() => Delete()} className="delete-td">
					Delete <br />
					All
				</td>
				<td onClick={() => getAll()} className="getall-td">
					Select <br />
					All
				</td>
			</table>
			<br />

			<table id="products">
				<tr id="trHeader">
					<td>Delete</td>
					<td></td>
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
										<button onClick={() => onClose(g.id)}>
											<i className="fas fa-trash"></i>
										</button>
									</td>
									<td>{num++}</td>
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