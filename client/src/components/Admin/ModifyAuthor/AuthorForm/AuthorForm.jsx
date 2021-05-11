/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Swal from 'sweetalert2';
import { addAuthor, getAllAuthors } from  '../../../../redux/actions/actionAuthors';


function CreateAuthor() {

  const productOrError = useSelector((store) => store.reducerErrorRoutes.stateAction)
 
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
    email: '',
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const alertSucces = () =>{
    Swal.fire({
       title: productOrError.data.message,
       icon: "success",
       timer: "1500",
       showConfirmButton: false,
    })
  }
 
  function handleSubmit(e) {
    e.preventDefault();

    const author = {
      name: input.name,
      email: input.email,
    };
    if(author.name !== " " && author.email !== " "){


      dispatch(addAuthor(author));
      dispatch( getAllAuthors());
      location.reload();
      
      setInput({
        ...input,
        name: '',
        email: '',
      });
    }
  }

  if(productOrError.status === 200){

      alertSucces();
      productOrError.status = 0
  }

  return (
    <div className="mainDivEP">
      <h2 className="titleCat">Add a new Author</h2>
      <div className="divEP">
        <form 
          className="formEP" 
          onSubmit={handleSubmit}
        >
          <div>
            Name: 
            <input
              required
              placeholder="New Author"
              className="inputprod"
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
          </div>
          <div>
            Email :
            <input
              required
              placeholder="email"
              className="inputprod"
              type="text"
              name="email"
              value={input.email}
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

export default CreateAuthor;
