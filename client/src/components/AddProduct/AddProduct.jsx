/*eslint-disable*/
import axios from "axios"
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllArtists } from '../../redux/actions/index';
import './AddProduct.css';

function AddProduct() {

    const dispatch = useDispatch()

    dispatch(getAllArtists());
    const allArtist = useSelector((store) => store.allArtistCache)

    // const series = useSelector(store => store.series)

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
        available: true,
        fileLink: "",
        preview: "",
        categories: [],
        author: {id:1, name: "", email: ""},
        seriesId: null
    })

    function handleInputChange(event) {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }

    //Handle input para price
    function handleInputChangePr(event) {
        setProduct({ ...product, [event.target.name]: Number(event.target.value) })
    }

    //Handle input para available
    function handleInputChangeAv(event) {        
        event.preventDefault();
        var option;
        if (event.target.value === "Yes") option = true;
        if (event.target.value === "No") option = false; 
        setProduct({ ...product, [event.target.name]: option })
    }


    //Handle input para artist
    function handleInputChangeAr(event) {
        event.preventDefault();
        console.log(Number(event.target.value))
        setProduct({ ...product, [event.target.name]: {id:Number(event.target.value), name: "", email: ""}})
    }

    function submitForm(event) {
        event.preventDefault();
        console.log(product)
        axios.post('http://localhost:3001/products', product);
    }

    var key = 1;

    return (
        <div className="mainDivAP">
            <h2>Add Product</h2>
            <div className="divAP">
                <form className="formAP" onSubmit={submitForm}>
                    <div>
                        Name: <input type="text" onChange={handleInputChange} name="name" />
                    </div>
                    <div>
                        Description: <input type="text" onChange={handleInputChange} name="description" />
                    </div>
                    <div>
                        Price: <input type="text" onChange={handleInputChangePr} name="price" />
                    </div>
                    <div>
                        Available:
                        <select name="available" id="selectorAvAP" onChange={handleInputChangeAv}>
                            <option key={`AP${key++}`} value="Yes">Yes</option>
                            <option key={`AP${key++}`} value="No">No</option>
                        </select>
                    </div>                    
                    <div>
                        FileLink: <input type="text" onChange={handleInputChange} name="fileLink" />
                    </div>
                    <div>
                        Preview: <input type="text" onChange={handleInputChange} name="preview" />
                    </div>
                    <div>
                        Artist:
                        <select name="author" id="selectorArAP" onChange={handleInputChangeAr}>
                            {allArtist.map(a => <option key={`AP${key++}`} value={a.idAuthors}>{a.name}</option>)}
                        </select>
                    </div>
                    <div>
                        Series: <input type="text" onChange={handleInputChange} name="series" value="Coming soon" readOnly />
                        {/* <select name="" id="">
                            {authors.map(a => {<option key={`AP${key++}`} value="1"></option>})}
                        </select> */}
                    </div>
                    <div>
                        Categories: <input type="text" onChange={handleInputChange} name="categories" value="Coming soon" readOnly />
                    </div>
                    <input type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
}

export default AddProduct

