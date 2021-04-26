/*eslint-disable*/
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";
import "../../../scss/components/_userLibrary.scss";

export default function Library() {

    var userProducts = []
    const userOrders = useSelector((store) => store.reducerOrderUser.userOrders);
    const completedUserOrder = userOrders.filter(order => order.state === "completed")
    completedUserOrder.map(order => order.products.map(product => userProducts.push(product)))

    const loading = useSelector((store) => store.reducerLoading.loading)

    const [products, setProducts] = useState([])

    useEffect(() => {
        if (completedUserOrder[0]) {
            setProducts(userProducts)
        }
    }, [completedUserOrder[0]?.id])

    useEffect(() => {
        if (products[0]) console.log(products)
    }, [products[0]])

    return (

        <div className="big-container">
            <div className="title">
                <h1>My products</h1>
            </div>
            <hr className="divisor" />
            <div className="tableheader">
                <h4>Preview</h4>
                <h4>Name</h4>
            </div>
            <div className="results">
                {products.length !== 0 &&
                    products.map((product, index) => (
                        <>
                            <div className="orderPreview" >
                                <div className="option">
                                    <img className="myProductsImage" src={product.preview} alt=""/>                                    
                                </div>
                                <div className="option">
                                    <h4 className="orderID1"> {product.name}</h4>
                                </div>
                                <div className="seemore">
                                    <Link to={`/product/${product.id}`}>
                                        <AiIcons.AiFillEye />
                                    </Link>
                                </div>
                            </div>
                        </>
                    ))}
            </div>
        </div>
    )
}
