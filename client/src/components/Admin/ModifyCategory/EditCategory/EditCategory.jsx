/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import {  } from '../../../../redux/actions/actionBack';
import '../../../../scss/components/_editProducts.scss';

function EditCategory() {

    const {id} = useParams();

    const allCategories = useSelector((store) => store.reducerCategories.allCategoriesCache)

    
    const [category, setCategory] = useState({
        id: 1,
        name: "",
    })

    const [boolean, setBoolean] = useState(false)

    useEffect(() => {
        const findCategory = allCategories.find(f => f.id === Number(id))
       
        if (findCategory?.id) {
          
            setCategory({
                id: findCategory.id,
                name: findCategory.name,

            })
        }
        
    }, [id])

    function handleInputChange(event) {
        setAuthor({ ...author, [event.target.name]: event.target.value })
    }

    //Handle input para price

    function submitForm(event) {
        
        // dispatch( editAuthor(author.id, author) );
    }
    const deleteProducts = () => {
        setBoolean(true)
    }
    const Yes = () => {

        if(category.id){

            // dispatch( deleteAuthor(author.id) ); //body
        }
        setBoolean(false);
    }
    const No = () => {
        setBoolean(false);
    }
    

    return (
        <div className="mainDivEP">
            <h2 className="title">Edit Category</h2>
            <Link 
                className="nav-link" 
                to="/Admin/Category"
            ><li>Add Category</li></Link>
            <div className="divEP">
                <form 
                    className="formEP" 
                    onSubmit={submitForm} 
                >
                    <div>
                        Name: 
                        <input 
                            className="input" 
                            type="text" 
                            onChange={handleInputChange} 
                            value={category.name} 
                            name="name" 
                        />
                    </div>
                    <input 
                        className="EditAndDelete" 
                        type="submit" 
                        value="Edit" 
                    />
                    <input 
                        className="EditAndDelete"
                        type="button" 
                        value="Delete" 
                        onClick={deleteProducts} 
                    />
                </form>
            </div>
                {boolean === true ? 
                    <div className="divDelete">Do you want to delete this product?
                        <br/>
                        <button className="Yes" type="button" onClick={Yes}>Yes</button>
                        <button className="No" type="button" onClick={No}>No</button>
                    </div> : null
                }
        </div>
    );
}

export default EditCategory;
