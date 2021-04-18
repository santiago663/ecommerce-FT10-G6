/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { getAllAuthors, getAllCategories, getAllSeries, addProducts } from  '../../../../redux/actions/actionBack';
import { addProductInProductBackup } from  '../../../../redux/actions/actionFront';
import '../../../../scss/components/_addProduct.scss';

function AddProduct() {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllAuthors());
        dispatch(getAllCategories());
        dispatch(getAllSeries()); 
    },[])

    const allArtist = useSelector((store) => store.reducerArtist.allArtistCache)
    const allCategories = useSelector((store) => store.reducerCategories.allCategoriesCache)
    const allSeries = useSelector((store) => store.reducerSeries.allSeriesCache)
    const productOrError = useSelector((store) => store.reducerErrorRoutes.stateAction)
    console.log(productOrError)

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
   
    const alertSucces = () =>{
        Swal.fire({
           title: "Producto Creado",
           icon: "success",
           timer: "1500",
           showConfirmButton: false,
        })
    }
    const alertError = () =>{
        Swal.fire({
           title: "Error Al crear el Producto",
           icon: "error",
           timer: "2500",
           showConfirmButton: false,
        })
    }
    
    function submitForm(event) {        
        event.preventDefault();
      
        dispatch( addProducts(product) )  
    }

    if(productOrError.status === 200){

        // dispatch( addProductInProductBackup(product))
        alertSucces();
        productOrError.status = 0
    }
    if(typeof productOrError.status === 'number' && productOrError.status !== 200 && productOrError.status !== 0){

        alertError();
        productOrError.status = 0
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
                            required
                            className="input"
                            type="text"
                            onChange={handleInputChange}
                            name="name" 
                        />
                    </div>
                    <div>
                        Description: 
                        <input
                            required
                            className="input" 
                            type="text" 
                            onChange={handleInputChange} 
                            name="description" 
                        />
                    </div>
                    <div>
                        Price: 
                        <input
                            required
                            className="input" 
                            type="text" 
                            onChange={handleInputChangePr} 
                            name="price" 
                        />
                    </div>
                    <div>
                        Available:
                        <select 
                            required
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
                            required
                            className="input" 
                            type="text" 
                            onChange={handleInputChange} 
                            name="fileLink" 
                        />
                    </div>
                    <div>
                        Preview: 
                        <input 
                            required
                            className="input" 
                            type="text" 
                            onChange={handleInputChange} 
                            name="preview" 
                        />
                    </div>
                    <div>
                        Artist:
                        <select 
                            required
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
                        <select 
                            required
                            name="seriesId" 
                            id="selectorSeAP"
                        >
                            {allSeries.map(s => <option key={`AP${key++}`} value={s.id}>{s.name}</option>)}
                        </select>
                    </div>
                    <div>
                        Categories:                        
                        <select 
                            required
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
                        required
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
