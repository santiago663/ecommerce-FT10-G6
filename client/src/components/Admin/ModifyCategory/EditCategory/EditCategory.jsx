/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useParams, Link } from 'react-router-dom'
import { editCategory, deleteCategory } from '../../../../redux/actions/actionCategories-Series';
import { upgradeEditCategories } from '../../../../redux/actions/actionUpgrade';


function EditCategory() {

    const {id} = useParams();

    const dispatch = useDispatch();

    const allCategories = useSelector((store) => store.reducerCategories.allCategoriesCache)
    const productOrError = useSelector((store) => store.reducerErrorRoutes.stateAction)
    
    const [category, setCategory] = useState({
        id: 0,
        name: "",
        available: true
    })

    const [boolean, setBoolean] = useState(false)

    useEffect(() => {
        const findCategory = allCategories.find(f => f.id === Number(id))
       
        if (findCategory?.id) {
          
            setCategory({
                id: findCategory.id,
                name: findCategory.name,
                available: findCategory.available

            })
        }
        
    }, [id])

    function handleInputChange(event) {
        let categoryName = event.target.value;

        if(categoryName !== ""){

          setCategory({ ...category, ["name"]: event.target.value })
        } 
    }

       //Handle input para available
       function handleInputChangeAv(event) {
        event.preventDefault();
        var option;
        if (event.target.value === "Yes") option = true;
        if (event.target.value === "No") option = false;
        setCategory({ ...category, [event.target.name]: option })
    }
 
    const alertSucces = () =>{
        Swal.fire({
           title: "Categoria Editada",
           icon: "success",
           timer: "1500",
           showConfirmButton: false,
        })
    }

    function submitForm(event) {
        event.preventDefault();

        if(category.name !== ""){
   
          dispatch( editCategory(id, category) );
        }
    }
    const deleteCategories = () => {
        setBoolean(true)
    }
    const Yes = () => {

        if(category.id){

            if(category.id){

              dispatch( deleteCategory(category.id) );

            }
        }
        setBoolean(false);
    }
    const No = () => {
        setBoolean(false);
    }

    if(productOrError && ( productOrError.status === 200)){

        if(id){
            let allCategoriesCop = allCategories
            if(category.id !==0 ){

                let indice = allCategoriesCop.findIndex((elemento) => {
                    
                    if(elemento.id === Number(id)) return true;
                });
                
                if(indice !== -1 ){
                    
                    allCategoriesCop[indice] = category
                }
                allCategoriesCop=[] 
            }
            if(allCategoriesCop.length !== 0)upgradeEditCategories(allCategoriesCop);      
        } 
            
        alertSucces();
        productOrError.status = 0
    }
    if(productOrError && ( productOrError.status === 205)){
        alertSucces();
        productOrError.status = 0
    }

    var key = 1;
    
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
                            required
                            className="inputprod" 
                            type="text" 
                            onChange={handleInputChange} 
                            value={category.name} 
                            name="name" 
                        />
                    </div>
                    <div>
                        Available:
                        <select 
                            name="available" 
                            className="selector"
                            id="selectorAvEP" 
                            value={category.available ? "Yes" : "No"} 
                            onChange={handleInputChangeAv}
                        >
                            <option key={`EP${key++}`} value="Yes">Yes</option>
                            <option key={`EP${key++}`} value="No">No</option>
                        </select>
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
                        onClick={deleteCategories} 
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
