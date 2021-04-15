/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../../../redux/actions/actionBack';

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
    <div className="form_container">
      <h3>Add a new Category for your Galery!</h3>
      <form className="input_form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            required
            placeholder="New Category"
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CategoryForm;
