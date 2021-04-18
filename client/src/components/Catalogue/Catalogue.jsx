/*eslint-disable*/
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/actionFront';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading/Loading';
import '../../scss/containers/_catalogue.scss';

function Catalogue() {
	const dispatch = useDispatch();
	const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
	const allProduct = useSelector((store) => store.reducerProduct.allProductCache);
	const productsPerPage = useSelector((store) => store.reducerPagination.productsPerPage);
	const currentPage = useSelector((store) => store.reducerPagination.currentPage);
	const loading = useSelector((store) => store.reducerLoading.loading);

	const indexLastProduct = currentPage * productsPerPage;
	const indexFirstProduct = indexLastProduct - productsPerPage;
	const currentProducts = allProduct.slice(indexFirstProduct, indexLastProduct);

	useEffect(() => {
		let storage = window.localStorage;
		if (storage.length !== 0 && storage.orderProducts && shoppingCart.length === 0) {
			let orderProducts = JSON.parse(localStorage.getItem('orderProducts'));
			orderProducts.map((item) => {
				dispatch(addToCart(item));
			});
		}
	});

	if (loading) {
		return (
			<div className="loader-container">
				<Loading />
			</div>
		);
	}

	return (
		<Fragment>
			<div className="catalogue-wrapper">
				{currentProducts && currentProducts.map((artwork) => <ProductCard key={artwork.id} data={artwork} />)}
			</div>
			<div className="paginate">
				<Pagination cardsPerPage={productsPerPage} totalCards={allProduct.length} />
			</div>
		</Fragment>
	);
}

export default Catalogue;
