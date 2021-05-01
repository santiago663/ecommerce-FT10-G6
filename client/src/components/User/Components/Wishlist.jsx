/*eslint-disable*/
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";
import "../../../scss/components/_userLibrary.scss";
import "../../../scss/components/_userWishlist.scss";
import LibraryDetail from './LibraryDetail'

export default function Wishlist() {

    var userProducts = []

    //TRAER PRODUCTOS AGREGADOS A LA WISHLIST
   
    const userOrders = useSelector((store) => store.reducerOrderUser.userOrders); 
    const completedUserOrder = userOrders.filter(order => order.state === "completed")
    completedUserOrder.map(order => order.products.map(product => userProducts.push(product)))


    const loading = useSelector((store) => store.reducerLoading.loading)

    const [products, setProducts] = useState([])
    const [ preview, setPreview ] = useState(false)

    useEffect(() => {
        if (completedUserOrder[0]) {
            setProducts(userProducts)
        }
    }, [completedUserOrder[0]?.id])


    const openPreview = (e, image) => {
        e.preventDefault()
        console.log(image)
        setPreview(image)

    }

    // const canBuy = completedUserOrder.filter((order) => order.products.find((product) => product.id == id));

    // const handleAddToCart = (productOnClick, currentUser, currentOrder) => {
	// 	if (currentUser.id) {
	// 		let total = 0;
	// 		shoppingCart.forEach((product) => {
	// 			total += product.price ? Number(product.price) : 0;
	// 		});
	// 		total = total + Number(productOnClick.price);
	// 		dispatch(addToCartUser(productOnClick, currentUser, currentOrder, total));
	// 	} else {
	// 		let data = JSON.parse(localStorage.getItem('orderProducts')) || [];
	// 		let found = data.filter((product) => product.id === productOnClick.id);

	// 		if (found.length === 0) {
	// 			data.push(productOnClick);
	// 			localStorage.setItem('orderProducts', JSON.stringify(data));
	// 			dispatch(addToCart(productOnClick));
	// 		}
	// 	}
	// };

	// const handleRemoveFromCart = (productOnClick, currentUser, currentOrder) => {
	// 	if (currentUser.id) {
	// 		let total = 0;
	// 		shoppingCart.forEach((product) => {
	// 			total += product.price ? Number(product.price) : 0;
	// 		});
	// 		total = total - Number(productOnClick.price);
	// 		dispatch(removeToCartUser(productOnClick, currentUser, currentOrder, total));
	// 	} else {
	// 		let data = JSON.parse(localStorage.getItem('orderProducts'));
	// 		let found = data.filter((product) => product.id !== productOnClick.id);

	// 		localStorage.setItem('orderProducts', JSON.stringify(found));
	// 		dispatch(removeFromCart(productOnClick));
	// 	}
	// };

	// let lStorage;
	// if (shoppingCart.length !== 0) {
	// 	if (shoppingCart.filter((prod) => prod.id === productCache.id).length === 1) {
	// 		lStorage = true;
	// 	}
	// }


    console.log(products)

    return (
        <>
        <div className="profile-body">
            <div className="title">
                <h1>My Wishlist</h1>
            </div>
            <hr className="divisor" />
            <div className="tableheader">
                <div className="libraryPreviewTitle"><h4>Preview</h4></div>
                <div className="libraryNameTitle"><h4>Name</h4></div>
                <div><h4>To Buy / Detail</h4></div>                 
            </div>
            <div className="myProductsResults">
                {products.length !== 0 && //PRODUCTOS DE LA WISHLIS
                    products.map((product, index) => (
                        <>
                            <div className="libraryPreview" >
                                <div className="divImage">
                                    <img className="myProductsImage" src={product.preview} alt="" onClick={(e) => openPreview(e, product.preview)}/>                                    
                                </div>                               
                                <div className="libraryProductName">
                                    <h4> {product.name}</h4>
                                </div>
                                <div className="libraryDownload">
                                {product.available === true ?
                                    <button
                                        className="fas fa-shopping-cart button-wishlist"
                                        // key={productCache.id}
                                        // onClick={() =>
                                        //     handleRemoveFromCart(productCache, currentUser, currentOrder)
                                        // }
                                    >
                                        
                                    </button> 
                                        // (
                                        // <div>
                                    	// 	{canBuy[0] ? (
                                        //         <span className="acquiedPD">Acquired</span>
                                        //     ) : false || !lStorage ? (
                                        //         <button
                                        //             className="fas fa-shopping-cart button-wishlist"
                                        //             // key={productCache.id}
                                        //             // onClick={() => handleAddToCart(productCache, currentUser, currentOrder)}
                                        //         >
                                                 
                                        //         </button>
                                        //     ) : (
                                        //         <button
                                        //             className="fas fa-shopping-cart button-wishlist"
                                        //             // key={productCache.id}
                                        //             // onClick={() =>
                                        //             //     handleRemoveFromCart(productCache, currentUser, currentOrder)
                                        //             // }
                                        //         >
                                                   
                                        //         </button>
                                        //     )}
                                        // </div>
                                
                                        // )
                                    :null}
                                    <Link to={`/product/${product.id}`}>
                                        <AiIcons.AiFillEye />
                                    </Link>
                                </div>
                            </div>                            
                        </>
                    ))}
            </div>
        </div>
        </>
    )
}
