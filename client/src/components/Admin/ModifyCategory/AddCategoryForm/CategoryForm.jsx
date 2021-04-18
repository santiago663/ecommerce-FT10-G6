/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { addCategory } from '../../../../redux/actions/actionBack';
import '../../../../scss/components/_editProducts.scss';


function CategoryForm() {

  const productOrError = useSelector((store) => store.reducerErrorRoutes.stateAction)
  console.log(productOrError)

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

  function handleSubmit(e) {
    e.preventDefault();
    const category = {
      name: input.name,
    };

    dispatch(addCategory(category));

    setInput({
      ...input,
      name: '',
    });
  }
  const alertSucces = () =>{
    Swal.fire({
       title: "Categoria Creada",
       icon: "success",
       timer: "1500",
       showConfirmButton: false,
    })
  }
  const alertError = () =>{
      Swal.fire({
        title: "Error al crear la Categoria",
        icon: "error",
        timer: "2500",
        showConfirmButton: false,
      })
  }
  if(productOrError.status === 200){

    alertSucces();
    productOrError.status = 0
}
  if(typeof productOrError.status === 'number' && productOrError.status !== 200 && productOrError.status !== 0){
      alertError();
      productOrError.status = 0
  }

  return (
    <div className="mainDivEP">
      <h2 className="title">Add Categories for your Galery!</h2>
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
                className="input" 
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
