/*eslint-disable*/
import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import AddProduct from './AddProduct/AddProduct';
import EditProduct from './EditProduct/EditProduct';
import '../../../scss/components/_modify.scss';

const ModifyProduct = () => {

    const allArtist = useSelector((store) => store.reducerArtist.allArtistCache)
    const allProducts = useSelector((store) => store.reducerProduct.backUpProducts)

    const [input, setInput] = useState(0);

    const handleChange = (id) => {
        
        if(id.target.value !== 0){
           setInput(id.target.value); 
        }    
    }

    
    const authorProducts = allProducts.filter(f => 
        {if(f.author.id === Number(input)){
            return f
        }  
    })

    return ( 
        <div className='ModifyProduct'>
            <div className="FilterAndProducts">
                <div className='authorFilter'>
                    <select name="authorId" id="selectorArAP" onChange={handleChange}>
                        <option value="" disabled selected >Select Author</option>    
                        {allArtist.map(a => <option value={a.id}>{a.name}</option>)}
                    </select>
                </div>
                <div className="productContainer">
                    <ul>
                        {authorProducts.length !== 0 && authorProducts.map(m => {
                            return(
                                <li className="product" key={m.id}>
                                    <Link to={`/Admin/Product/Edit/${m.id}`}>
                                        <p>{m.name}</p>
                                    </Link>
                                </li>           
                            )
                        })}
                    </ul>
                </div> 
            </div>
            <div className='compProd'>
                <Route exact path="/Admin/Product" component={AddProduct} />
               
                <Route exact path="/Admin/Product/Edit/:id" component={EditProduct} />
            </div>
        </div>
    );
}
 
export default ModifyProduct;