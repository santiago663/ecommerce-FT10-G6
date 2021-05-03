/*eslint-disable*/
import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { useSelector} from 'react-redux';
import CategoryForm from './AddCategoryForm/CategoryForm'
import EditCategory from './EditCategory/EditCategory';
import '../../../scss/components/_filterProductByAuthor.scss';


const ModifyCategory = () => {

    const allCategories = useSelector((store) => store.reducerCategories.allCategoriesCache)
    const allProducts = useSelector((store) => store.reducerProduct.backUpProducts)

    const [input, setInput] = useState(0);

    const handleChange = (id) => {
        
        if(id.target.value !== 0){
           setInput(id.target.value); 
        }    
    }

    let category = [];
    if(input !== 0){
      category = allCategories.filter(f => f.id === Number(input))  
    }
    
    let products = [];
    if(input !== 0){
        products = allProducts.filter(f=> f.categories.find(g => {
            if(g.id == Number(input)){
                return g.id
            }
        }))
    }

    return ( 
        <div className='ModifyProduct'>
            <div className='FilterAndProducts'>
                <div className='authorFilter'>
                    <select 
                        className="selector"
                        name="authorId" 
                        id="selectorArAP" 
                        onChange={handleChange}
                    >
                        <option 
                            value="" 
                            disabled selected 
                        >Categories in Use</option>    
                        {allCategories.map(a => <option value={a.id}>{a.name}</option>)}
                    </select>
                </div>
                <div className="productContainer">
                    {category.length !== 0
                    ?<ul>
                        {category.length !== 0 && category.map(m => {
                            return(
                                <li className="product" key={m.id}>
                                    <Link to={`/Admin/Category/Edit/${m.id}`}>
                                        <h4>{m.name}</h4>
                                        <h3>Products:</h3>
                                        {products.length !== 0 && products.map(m => {
                                           return(<p>✽{m.name}</p>) 
                                        })}
                                    </Link>
                                </li>           
                            )
                        })}
                    </ul>
                    : null
                    } 
                </div>
            </div>
            <div className='compProd'>
                <Route exact path="/Admin/Category" component={CategoryForm} />
               
               <Route exact path="/Admin/Category/Edit/:id" component={EditCategory} />
            </div>
        </div>
    );
}
export default ModifyCategory;