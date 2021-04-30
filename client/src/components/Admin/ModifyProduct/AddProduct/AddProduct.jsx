/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addProducts, getAllProducts,deleteProductCategory,
         editProductByBody, deleteProduct } from  '../../../../redux/actions/actionBack';
import { upgradeEditProducts } from '../../../../redux/actions/actionUpgrade';
import '../../../../scss/components/_addProduct.scss';
import {firebase} from '../../../../firebase/firebase-config';

function AddProduct() {

    const dispatch = useDispatch()
    const allArtist = useSelector((store) => store.reducerArtist.allArtistCache)
    const allCategories = useSelector((store) => store.reducerCategories.allCategoriesCache)
    const allSeries = useSelector((store) => store.reducerSeries.allSeriesCache)
    const allProducts = useSelector((store) => store.reducerProduct.backUpProducts)
    const productOrError = useSelector((store) => store.reducerErrorRoutes.stateAction)

    const {id} = useParams();
    
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
        available: true,
        fileLink: "",
        preview: "",
        categories: [],
        authorId: 0,        
        seriesId: null
    })

    const [authorName, setAuthorName] = useState("")
    const [boolean, setBoolean] = useState(false)
    
    useEffect(() => {

        const findProduct = allProducts.find(f => f.id === Number(id))
        
        if (findProduct?.id) {
          
            setProduct({
                id: findProduct.id,
                name: findProduct.name,
                description: findProduct.description,
                price: findProduct.price,
                available: findProduct.available,
                fileLink: findProduct.fileLink,
                preview: findProduct.preview,
                categories: findProduct.categories,
                author: findProduct.author,
                seriesId: findProduct.seriesId,
            })
            
            const findArtist = allArtist.find(g => g.id == findProduct.author.id)
            setAuthorName(findArtist.name) 
        }
        
    }, [id])
 
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
        if (id){
            var cat = product.categories
            if (cat.find(c => c?.id != event.target.value)) {
                cat.push(allCategories.find(c => c.id == Number(event.target.value)))
            }
            else if (cat[0] == undefined) {
                cat.push(allCategories.find(c => c.id == Number(event.target.value)))
            }
            //borra los repetidos
            cat = cat.filter((thing, index, self) => index === self.findIndex((t) => (t?.id === thing?.id)))
            setProduct({ ...product, [event.target.name]: cat })
        }else{
            var cat = product.categories
            if(event.target.value)
            cat.push(allCategories.find(c => c.id == Number(event.target.value)).id)
            
            //borra los repetidos
            cat = cat.filter((arg, pos) => cat.indexOf(arg)==pos)
            setProduct({ ...product, [event.target.name]: cat })
        }


        
    }

    //Handle input para borrar categoria
    function handleInputDeleteCa(event, id) {
        var cat = product.categories
        if (id){
            dispatch( deleteProductCategory(product.id, id) );
        }
        cat = cat.filter( cId => cId != Number(id))        
        setProduct({ ...product, categories: cat })

        var cat = product.categories
        dispatch( deleteProductCategory(product.id, id) );
        cat = cat.filter(c => c?.id != Number(id))
        setProduct({ ...product, categories: cat })
    }
   
    const alertSucces = () =>{
        if(!id){
            Swal.fire({
               title: "Producto Creado",
               icon: "success",
               timer: "1500",
               showConfirmButton: false,
            })
        }else{
            Swal.fire({
                title: "Producto Editado",
                icon: "success",
                timer: "1500",
                showConfirmButton: false,
             })
        }
    }
 
    const alertError = () =>{
        Swal.fire({
            title: "Error Creating Product",
            icon: "error",
            timer: "1500",
            showConfirmButton: false,
        })
    }
    
    
    function submitForm(event) {        
        event.preventDefault();
      if(id){
            dispatch( editProductByBody(product.id, product) );
      }else{
          if( product.name !== "" || product.description !== "" || product.price !== 0 || product.fileLink !== "" || product.preview !== "", product.categories.length !==0 || product.authorId !== 0){
            dispatch( addProducts(product) );
            dispatch( getAllProducts() );
            location.reload();
          }
          else{
            alertError();
          }
      }
    }
    const deleteProducts = (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Are you sure?',
            text: `The Delete to ${product.name}` ,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProduct(product.id))
                setBoolean(true)
                setProduct({
                    name: "",
                    description: "",
                    price: 0,
                    available: true,
                    fileLink: "",
                    preview: "",
                    categories: [],
                    authorId: 0,        
                    seriesId: null
                })
              Swal.fire(
                'Deleted!',
                'this product is deleted',
                'success'
              )
            }else{
                e.target.value=0;
            }
          })
    }

    if(productOrError && productOrError.status === 200){
        if(id){
            let allProductsCop = allProducts
            if(product.id !==0 ){

                let indice = allProductsCop.findIndex((elemento) => {
                    if(elemento.id === Number(id)) return true;
                });
                
                if(indice !== -1 ){
                    allProductsCop[indice] = product
                }
                allProductsCop=[] 
            }
            if(allProductsCop.length !== 0)upgradeEditProducts(allProductsCop);      
        } 
        alertSucces();
        productOrError.status = 0
    }
    
    if(productOrError && productOrError.status === 200){
     
        alertSucces();
        productOrError.status = 0
    }

    var key = 1;

    const initialState = {
        uploadValue:0,
        picture: ""
    }
    const [uploadValue, setUploadValue] = useState(initialState)
    const handleOnChange = (e) => {
                const file = e.target.files[0]
                const storageRef = firebase.storage().ref(`pictures/${file.name}`)
                const task = storageRef.put(file)
            
                task.on('state_changed', (snapshot) => {
                  let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                  setUploadValue({
                    uploadValue: percentage
                  })
                  
                }, (error) => {
                  console.error(error.message)
                }, async () => {
                  // Upload complete
                  setUploadValue({
                    message:'subido',
                    picture: await task.snapshot.ref.getDownloadURL()
                  })
                  setProduct({
                    ...product,
                    fileLink: await task.snapshot.ref.getDownloadURL(),
                    preview: await task.snapshot.ref.getDownloadURL()
                    })
                })
        }

    const deletefile = () =>{
        const storageRef = firebase.storage().ref()
        var desertRef = storageRef.child(uploadValue.picture);
        console.log(desertRef);
        // Delete the file
        desertRef.delete().then(function() {
        // File deleted successfully
        console.log('eliminado con exito');
        }).catch(function(error) {
        // Uh-oh, an error occurred!
        console.log(error);
        });
    }

    return (
        <div className="mainDivAP">
            <div className="divAP">
            <h2 className="title">Add Product</h2>
                <form className="formAP" onSubmit={submitForm}>
                    <div>
                        Name:
                        {id ? 
                        <input
                            required
                            className="inputprod"
                            type="text"
                            onChange={handleInputChange}
                            name="name"
                            value={product.name}
                        /> :
                        <input
                            required
                            className="inputprod"
                            type="text"
                            onChange={handleInputChange}
                            name="name"
                            
                        />}

                    </div>
                    <div>
                        Description:
                        {id ? 
                        <input
                            required
                            className="inputprod" 
                            type="text" 
                            onChange={handleInputChange} 
                            name="description"
                            value={id ? product.description : ""}
                        /> :
                        <input
                            required
                            className="inputprod" 
                            type="text" 
                            onChange={handleInputChange} 
                            name="description"
                        />
                        }
                    </div>
                    <div>
                        Price: 
                        {id ?
                        <input
                            required
                            className="inputprod" 
                            type="text" 
                            onChange={handleInputChangePr} 
                            name="price"
                            value={product.price}
                        />
                        :
                        <input
                            required
                            className="inputprod" 
                            type="text" 
                            onChange={handleInputChangePr} 
                            name="price"
                        /> }
                    </div>
                    <div>
                        Available:
                        {id ?
                        <select 
                            className="selector"
                            name="available" 
                            id="selectorAvAP" 
                            onChange={handleInputChangeAv}
                            value={product.available ? "Yes" : "No"}
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        :
                        <select 
                            className="selector"
                            name="available" 
                            id="selectorAvAP" 
                            onChange={handleInputChangeAv}
                            >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        }
                    </div>
                    <div>
                        Select to File:
                        <input 
                            className="SelectorFile" 
                            type="file" 
                            onChange={handleOnChange} 
                            name="file" 
                        />
                    </div>                    
                    <div>
                        FileLink:
                        {id ?
                        <input 
                            required
                            className="inputprod" 
                            type="text" 
                            onChange={handleInputChange} 
                            name="fileLink"
                            value={product.fileLink}
                            onChangeCapture=""
                        />
                        :
                        <input 
                            required
                            className="inputprod" 
                            type="text" 
                            onChange={handleInputChange} 
                            name="fileLink"
                            value={uploadValue.picture}
                            onChangeCapture=""
                        />
                        }
                    </div>
                    <div>
                        Preview:
                        {id ?
                        <input 
                            required
                            className="inputprod" 
                            type="text" 
                            onChange={handleInputChange} 
                            name="preview"
                            value={product.preview}
                        />
                        :
                        <input 
                            required
                            className="inputprod" 
                            type="text" 
                            onChange={handleInputChange} 
                            name="preview"
                            value={uploadValue.picture}
                        /> }
                    </div>
                    <div>
                        Artist:
                        {id ?
                        <select 
                            className="selector"
                            name="authorId" 
                            id="selectorArAP" 
                            onChange={handleInputChangeAr}
                            value = {product.author?.id}
                        >
                            <option> </option>
                            {allArtist.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
                        </select>
                        :
                        <select 
                            className="selector"
                            name="authorId" 
                            id="selectorArAP" 
                            onChange={handleInputChangeAr}
                            >
                            <option> </option>
                            {allArtist.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
                        </select>
                        }
                    </div>
                    <div>
                        Series:
                        <select 
                            className="selector"
                            name="seriesId" 
                            id="selectorSeAP"
                        >
                            {allSeries.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                        </select>
                    </div>
                    <div>
                        Categories:                        
                        <select 
                            className="selector"
                            name="categories" 
                            id="selectorCaAP" 
                            onChange={handleInputChangeCa}
                        >
                            <option> </option>
                            {allCategories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                        {id ?
                        product.categories.map(p => 
                        <span className="catego" key={p.id} onClick={(event) => handleInputDeleteCa(event, p?.id)} >{p?.name}</span>)
                        :
                        product.categories.map(id => 
                        <span className="catego" key={id.id} onClick={(event)=>handleInputDeleteCa(event, id)} >{allCategories.find(c=>c.id==id)?.name}</span> )
                        }
                    </div>
                    {id ?
                    <div>
                        <input 
                            className="EditOrAdd" 
                            type="submit" 
                            value="Edit" 
                        />
                        <input 
                            className="EditOrAdd"
                            type="button" 
                            value="Delete" 
                            onClick={deleteProducts} 
                        />
                    </div>
                    :
                    <input
                        className="EditOrAdd"
                        type="submit" 
                        value="Add" 
                    />
                    }
                </form>
            </div>
            <div className="imgfile">
                <progress className="progress" value={uploadValue.uploadValue} max='100'>
                    {uploadValue.uploadValue} %
                </progress>
                <div className="image">
                    {id ? <img className="image" src={product.preview} />
                    : <img className="image" src={uploadValue.picture} />}
                </div>
                <input type="submit" value="quitar" onClick={deletefile} />
            </div>
        </div>
    );
}

export default AddProduct
