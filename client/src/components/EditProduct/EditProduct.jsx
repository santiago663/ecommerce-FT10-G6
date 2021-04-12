/*eslint-disable*/
import axios from "axios"
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions/index';
import './EditProduct.css';

function EditProduct() {

    const dispatch = useDispatch()

    const allArtist = useSelector((store) => store.allArtistCache)
    const allCategories = useSelector((store) => store.allCategoriesCache)
    const allSeries = useSelector((store) => store.allSeriesCache)
    const allProducts = useSelector((store) => store.artworkCache) 

    // console.log(allProducts)

    useEffect(()=>{
        dispatch(getAllProducts());
    },[])

    const [product, setProduct] = useState({
        id:1,
        name: "",
        description: "",
        price: 0,
        available: true,
        fileLink: "",
        preview: "",
        categories:[],
        authorId: 1, 
        seriesId: null
    })

    useEffect(() => {
        if (allProducts[0]?.id) {
            setProduct({
                id: allProducts[0].id,
                name: allProducts[0].name,
                description: allProducts[0].description,
                price: allProducts[0].price,
                available: allProducts[0].available,
                fileLink: allProducts[0].fileLink,
                preview: allProducts[0].preview,
                categories: allProducts[0].categories,
                authorId: allProducts[0].authorId,
                seriesId: allProducts[0].seriesId,              
            })
        }        
    }, [allProducts[0]?.id])

    function handleInputChange(event) {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }

    //Handle input para price
    function handleInputChangePri(event) {
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
        console.log(event.target.value)
        setProduct({ ...product, [event.target.name]: allArtist.find(a => event.target.value === a.idAuthors)})
    }

    //Handle input para product
    function handleInputChangePro(event) {
        event.preventDefault();
        var option = event.target.value 
        var newProduct = allProducts.find(p => p.id == option)
        console.log(newProduct)

        setProduct({
            id: newProduct.id,
            name: newProduct.name,
            description: newProduct.description,
            price: newProduct.price,
            available: newProduct.available,
            fileLink: newProduct.fileLink,
            preview: newProduct.preview,
            categories: newProduct.categories,
            authorId: newProduct.authorId,
            seriesId: newProduct.seriesId,
        })
    }

    //Handle input para categories
    function handleInputChangeCa(event) {           
        var cat = product.categories
        if (cat.find(c=>c?.id !=event.target.value)) {
            axios.put(`http://localhost:3001/put/product/${product.id}/category/${event.target.value}`)
            cat.push(allCategories.find(c => c.id == Number(event.target.value))) 
        }
        else if(cat[0]==undefined){
            axios.put(`http://localhost:3001/put/product/${product.id}/category/${event.target.value}`)
            cat.push(allCategories.find(c => c.id == Number(event.target.value)))
        }
        //borra los repetidos
        cat = cat.filter((thing, index, self) => index === self.findIndex((t) => (t?.id === thing?.id)))
        setProduct({ ...product, [event.target.name]: cat })
    }

    //Handle input para borrar categoria
    function handleInputDeleteCa(event, id) {
        var cat = product.categories
        axios.delete(`http://localhost:3001/delete/product/${product.id}/category/${id}`)
        cat = cat.filter( c => c?.id != Number(id))        
        setProduct({ ...product, categories: cat })
    }

    function submitForm(event) {
        axios.put(`http://localhost:3001/put/product/${product.id}`, product)
    }

    var key = 1;

    return (
        <div className="mainDivEP">
            <h2>Edit Product</h2>
            <div className="divEP">
                <form className="formEP" onSubmit={submitForm}>
                    <div>
                        Product:
                        <select name="id" id="selectorPrEP" onChange={handleInputChangePro}>
                            {allProducts.map(p => <option key={`EP${key++}`} value={p.id}>{p?.name.slice(0, 30)} --- {p?.author?.name}</option>)}
                        </select>
                    </div>
                    <div>
                        Name: <input type="text" onChange={handleInputChange} value={product.name} name="name" />
                    </div>
                    <div>
                        Description: <input type="text" onChange={handleInputChange} value={product.description} name="description" />
                    </div>
                    <div>
                        Price: <input type="text" onChange={handleInputChangePri} value={product.price} name="price" />
                    </div>
                    <div>
                        Available:
                        <select name="available" id="selectorAvEP" value={product.available ? "Yes" : "No"} onChange={handleInputChangeAv}>
                            <option key={`EP${key++}`} value="Yes">Yes</option>
                            <option key={`EP${key++}`} value="No">No</option>
                        </select>
                    </div>                    
                    <div>
                        FileLink: <input type="text" onChange={handleInputChange} value={product.fileLink} name="fileLink" />
                    </div>
                    <div>
                        Preview: <input type="text" onChange={handleInputChange} value={product.preview} name="preview" />
                    </div>
                    <div>
                        Artist:
                        <select name="author" id="selectorArEP" onChange={handleInputChangeAr}>
                            <option key={`EP${key++}`}> </option>
                            {allArtist.map(a => <option key={`EP${key++}`} value={a.idAuthors}>{a.name}</option>)}
                        </select>
                    </div>
                    <div>
                        Series:
                        <select name="series" id="selectorSeAP" >
                            {allSeries.map(s => <option key={`EP${key++}`} value={s.id}>{s.name}</option>)}
                        </select>
                    </div>
                    <div>
                        Categories:
                        <select name="categories" id="selectorCaAP" value={""} onChange={handleInputChangeCa}>
                        <option key={`EP${key++}`}> </option>
                            {allCategories.map(c => <option key={`EP${key++}`} value={c.id}>{c.name}</option>)}
                        </select>
                        {product.categories.map(p => <span key={`EP${key++}`} onClick={(event)=>handleInputDeleteCa(event, p?.id)} >{p?.name}</span> )}
                    </div>
                    <input type="submit" value="Edit" />
                </form>
            </div>
        </div>
    );
}

export default EditProduct
