/*eslint-disable*/
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import { Link } from "react-router-dom";
import "../../../scss/components/_userLibrary.scss";
import "../../../scss/components/_userWishlist.scss";


export default function Wishlist() {

    var userProducts = []

    //TRAER PRODUCTOS AGREGADOS A LA WISHLIST
    const wishlistUser = useSelector((store) => store.reducerWishlist.wishlist); 
	

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


    return (
        <>
        <div className="profile-body">
            <div className="title">
                <h1>My Wishlist</h1>
            </div>
            <hr className="divisor" />
            <div className="tableheader">
                <div className="libraryPreviewTitle"><h4>Preview</h4></div>
                <div className="libraryPreviewTitle"><h4>Name</h4></div>
                <div className="libraryPreviewTitle"><h4>Price</h4></div>
                <div><h4>To Buy / Detail</h4></div>                 
            </div>
            <div className="myProductsResults">
                {wishlistUser.length !== 0 && //PRODUCTOS DE LA WISHLIS
                    wishlistUser.products.map((product, index) => (
                        <>
                            <div className="libraryPreview" >
                                <div className="divImage">
                                    <img className="myProductsImage" src={product.preview} alt="" onClick={(e) => openPreview(e, product.preview)}/>                                    
                                </div>                               
                                <div className="libraryProductName">
                                    <h4> {product.name}</h4>
                                </div>
                                <div className="libraryProductName">
                                    <h4> ${product.price}</h4>
                                </div>
                                <div className="libraryDownload">
                                {product.available === true ?
                                    <button
                                        className=" button-wishlist"
                                    >
                                        <GiIcons.GiHeartMinus />
                                    </button> 
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
