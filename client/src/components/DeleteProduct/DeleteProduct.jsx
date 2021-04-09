/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './DeleteProduct.styl';

function DeleteProduct() {

    const dispatch = useDispatch()
    const authors = useSelector(store => store.authors)

    var key = 1;   

    

    return (
        <div className="mainDivDP">
            <h2>Delete Product</h2>           
        </div>
    );
}


export default DeleteProduct
