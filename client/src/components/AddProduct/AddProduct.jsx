/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AddProduct.styl';

function AddProduct() {

    const dispatch = useDispatch()
    const authors = useSelector(store => store.authors)
    // const series = useSelector(store => store.series)

    var availableOption = document.querySelectorAll("#selectorACP option");

    var key = 1;

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
        available: true,
        fileLink: "",
        preview: "",
        authorId: "",
        seriesId: ""
    })

    function handleInputChange(event) {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }

    function handleInputChangeAv(event) {
        event.preventDefault();
        var option = false
        for (var i = 0; i < availableOption.length; i++) {
            if (availableOption[i].selected) {
                if (availableOption[i].value === "No") option = false
                else option = true
            }
        }
        setProduct({ ...product, [event.target.name]: option })
    }

    function submitForm(event) {
        event.preventDefault();
        dispatch(addProduct(product))
    }

    return (
        <div className="mainDivAP">
            <h2>Add Product</h2>
            <br />
            <div className="formAPCP">
                <form onSubmit={submitForm}>
                    Name: <input type="text" onChange={handleInputChange} name="name" />
                Description: <input type="text" onChange={handleInputChange} name="description" />
                Price: <input type="text" onChange={handleInputChange} name="price" />
                Available:
                <select name="available" id="selectorACP" onChange={handleInputChangeAv}>
                        <option key={`CP${key++}`} value="Yes">Yes</option>
                        <option key={`CP${key++}`} value="No">No</option>
                    </select>
                FileLink: <input type="text" onChange={handleInputChange} name="fileLink" />
                Preview: <input type="text" onChange={handleInputChange} name="preview" />
                Author:
                <select name="" id="">
                        {/* {authors.map(a => {<option key={`CP${key++}`} value="1"></option>})} */}
                    </select>
                Series:
                <select name="" id="">
                        {/* {authors.map(a => {<option key={`CP${key++}`} value="1"></option>})} */}
                    </select>
                </form>
            </div>
        </div>
    );
}

export default AddProduct

