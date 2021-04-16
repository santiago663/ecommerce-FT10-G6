/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../../../redux/actions/actionBack';
import '../../../../scss/components/_editProducts.scss';

function CategoryForm() {

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

  return (
    <div className="mainDivEP">
      <h2 className="title">Add Categories for your Galery!</h2>
      <div className="divEP">
        <form 
          className="formEP"  
          onSubmit={handleSubmit}
        >
          <div>
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
