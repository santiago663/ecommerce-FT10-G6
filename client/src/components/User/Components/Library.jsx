/*eslint-disable*/
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";
import "../../../scss/components/_userLibrary.scss";
import LibraryDetail from './LibraryDetail'

export default function Library() {

    var userProducts = []
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
        {
                preview !== false ? <LibraryDetail preview={preview} setPreview={setPreview} /> : null
            }

        <div className="profile-body">
            <div className="title">
                <h1>My products</h1>
            </div>
            <hr className="divisor" />
            <div className="tableheader">
                <div className="libraryPreviewTitle"><h4>Preview</h4></div>
                <div className="libraryNameTitle"><h4>Name</h4></div>
                <div><h4>Download / Detail</h4></div>                 
            </div>
            <div className="myProductsResults">
                {products.length !== 0 &&
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
                                <a download className="orderID1" href={product.fileLink}><AiIcons.AiOutlineDownload /></a>                                   
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
