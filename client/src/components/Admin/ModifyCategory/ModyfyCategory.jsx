/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import CategoryForm from './AddCategoryForm/CategoryForm';


const ModifyCategory = () => {

    const allCategories = useSelector((store) => store.reducerCategories.allCategoriesCache)

    const handleChange = (id) => {
        
        if(id.target.value !== 0){
           setInput(id.target.value); 
        }    
    }

    return ( 
        <div className='ModifyProduct'>
            <div className='FilterAndProducts'>
                <div className='authorFilter'>
                    <select name="authorId" id="selectorArAP" onChange={handleChange}>
                        <option value="" disabled selected >Categories in Use</option>    
                        {allCategories.map(a => <option value={a.id}>{a.name}</option>)}
                    </select>
                </div>
            </div>
            <div className='compProd'>
                <CategoryForm />
            </div>
        </div>
    );
}
export default ModifyCategory;