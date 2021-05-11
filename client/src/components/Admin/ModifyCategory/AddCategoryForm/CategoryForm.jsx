/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { addCategory, getAllCategories } from '../../../../redux/actions/actionCategories-Series';

function CategoryForm() {

  const productOrError = useSelector((store) => store.reducerErrorRoutes.stateAction)

  const dispatch = useDispatch();
  
  const [input, setInput] = useState({
    name: '',
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const alertSucces = () =>{
    Swal.fire({
       title: "Added Category",
       icon: "success",
       timer: "1500",
       showConfirmButton: false,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const category = {
      name: input.name,
    };

    dispatch( addCategory(category) );
    dispatch( getAllCategories() );
    setInput({
      ...input,
      name: '',
    });
    location.reload();
  }

  if(productOrError && productOrError.status === 205){
            
    alertSucces();
    productOrError.status = 0
  }

  return (
    <div className="mainDivEP">
      <h2 className="titleCat">Add Categories for your Galery!</h2>
      <div className="divEP">
        <form 
          className="formEP"  
          onSubmit={handleSubmit}
        >
          <div>
            Name: 
            <input
                required
                placeholder="New Category"
                className="inputprod" 
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
              /> 
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

export default CategoryForm;
