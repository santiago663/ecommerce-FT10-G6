/*eslint-disable*/
import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import CategoryForm from './AddCategoryForm/CategoryForm'
import EditCategory from './EditCategory/EditCategory';
import '../../../scss/components/_modify.scss';


const ModifyCategory = () => {

    const allCategories = useSelector((store) => store.reducerCategories.allCategoriesCache)
    const allProducts = useSelector((store) => store.reducerProduct.backUpProducts)

    const [input, setInput] = useState(0);

    const handleChange = (id) => {
        
        if(id.target.value !== 0){
           setInput(id.target.value); 
        }    
    }
    const category = allCategories.filter(f => f.id === Number(input))

    const products = allProducts.find(f=> f.categories.filter(g => {
        if(g.id == Number(input)){
            return g.id
        }
    }))

    return ( 
        <div className='ModifyProduct'>
            <div className='FilterAndProducts'>
                <div className='authorFilter'>
                    <select name="authorId" id="selectorArAP" onChange={handleChange}>
                        <option value="" disabled selected >Categories in Use</option>    
                        {allCategories.map(a => <option value={a.id}>{a.name}</option>)}
                    </select>
                </div>
                <div className="productContainer">
                    <ul>
                        {category.map(m => {
                            return(
                                <li className="product" key={m.id}>
                                    <Link to={`/Admin/Category/Edit/${m.id}`}>
                                        <p>{m.name}</p>
                                    </Link>
                                </li>           
                            )
                        })}
                    </ul> 
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