/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './EditProduct.styl';

function EditProduct() {

    const dispatch = useDispatch()
    const authors = useSelector(store => store.authors)

    var key = 1;   

    

    return (
        <div className="mainDivEP">
            <h2>Edit Product</h2>           
        </div>
    );
}


export default EditProduct
