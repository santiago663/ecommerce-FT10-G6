/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAuthors, getAllCategories, getAllSeries, addProducts } from  '../../../../redux/actions/actionBack';
import '../../../../scss/components/_addProduct.scss';

function AddProduct() {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllAuthors());
        dispatch(getAllCategories());
        dispatch(getAllSeries()); 
    },[])

    const allArtist = useSelector((store) => store.reducerArtist.allArtistCache)
    // const allArtistError = useSelector((store) => store.reducerArtist.allArtistError)
    const allCategories = useSelector((store) => store.reducerCategories.allCategoriesCache)
    // const allCategoriesError = useSelector((store) => store.reducerCategories.allCategoriesError)
    const allSeries = useSelector((store) => store.reducerSeries.allSeriesCache)
    // const allSeriesError = useSelector((store) => store.reducerSeries.allSeriesError)
    // const postProduct = useSelector((store) => store.reducerErrorRoutes.postProduct)
    // const postProductError = useSelector((store) => store.reducerErrorRoutes.postProductError)

    // console.log(allArtistError)
    // console.log(allCategoriesError)
    // console.log(allSeriesError)
    console.log(postProduct,"postProduct")
    console.log(postProductError,"postProductError")

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
        available: true,
        fileLink: "",
        preview: "",
        categories: [],
        authorId: 1,        
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
 
        setProduct({ ...product, [event.target.name]: Number(event.target.value)})
    }

    //Handle input para categories
    function handleInputChangeCa(event) {           
        var cat = product.categories
        if(event.target.value)
        cat.push(allCategories.find(c => c.id == Number(event.target.value)).id)

        //borra los repetidos
        cat = cat.filter((arg, pos) => cat.indexOf(arg)==pos)
        setProduct({ ...product, [event.target.name]: cat })
    }

    //Handle input para borrar categoria
    function handleInputDeleteCa(event, id) {           
        var cat = product.categories
        cat = cat.filter( cId => cId != Number(id))        
        setProduct({ ...product, categories: cat })
    }

    function submitForm(event) {        
        event.preventDefault();
      
        // axios.post('http://localhost:3001/post/product', product);
        dispatch( addProducts(product) )
    }

    var key = 1;

    return (
        <div className="mainDivAP">
            <h2 className="title">Add Product</h2>
            <div className="divAP">
                <form className="formAP" onSubmit={submitForm}>
                    <div>
                        Name: 
                        <input
                            className="input"
                            type="text"
                            onChange={handleInputChange}
                            name="name" 
                        />
                    </div>
                    <div>
                        Description: 
                        <input 
                            className="input" 
                            type="text" 
                            onChange={handleInputChange} 
                            name="description" 
                        />
                    </div>
                    <div>
                        Price: 
                        <input 
                            className="input" 
                            type="text" 
                            onChange={handleInputChangePr} 
                            name="price" 
                        />
                    </div>
                    <div>
                        Available:
                        <select 
                            name="available" 
                            id="selectorAvAP" 
                            onChange={handleInputChangeAv}
                        >
                            <option key={`AP${key++}`} value="Yes">Yes</option>
                            <option key={`AP${key++}`} value="No">No</option>
                        </select>
                    </div>                    
                    <div>
                        FileLink: 
                        <input 
                            className="input" 
                            type="text" 
                            onChange={handleInputChange} 
                            name="fileLink" 
                        />
                    </div>
                    <div>
                        Preview: 
                        <input 
                            className="input" 
                            type="text" 
                            onChange={handleInputChange} 
                            name="preview" 
                        />
                    </div>
                    <div>
                        Artist:
                        <select 
                            name="authorId" 
                            id="selectorArAP" 
                            onChange={handleInputChangeAr}
                        >
                            <option key={`AP${key++}`}> </option>
                            {allArtist.map(a => <option key={`AP${key++}`} value={a.id}>{a.name}</option>)}
                        </select>
                    </div>
                    <div>
                        Series:
                        <select name="seriesId" id="selectorSeAP">
                            {allSeries.map(s => <option key={`AP${key++}`} value={s.id}>{s.name}</option>)}
                        </select>
                    </div>
                    <div>
                        Categories:                        
                        <select 
                            name="categories" 
                            id="selectorCaAP" 
                            onChange={handleInputChangeCa}
                        >
                            <option key={`AP${key++}`}> </option>
                            {allCategories.map(c => <option key={`AP${key++}`} value={c.id}>{c.name}</option>)}
                        </select>
                        {product.categories.map(id => 
                        <span key={`AP${key++}`} onClick={(event)=>handleInputDeleteCa(event, id)} >{allCategories.find(c=>c.id==id)?.name}</span> )
                        }
                    </div>
                    <input 
                        className="EditOrAdd"
                        type="submit" 
                        value="Add" 
                    />
                </form>
            </div>
        </div>
    );
}

export default AddProduct
