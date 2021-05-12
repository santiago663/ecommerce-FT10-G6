import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAuthor } from '../../redux/actions/actionAuthors';

function CreateAuthor() {
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

  function handleSubmit(e) {
    e.preventDefault();
    const author = {
      name: input.name,
      email: input.email,
    };

    dispatch(addAuthor(author));
    setInput({
      ...input,
      name: '',
      email: '',
    });
  }

  return (
    <div className="form_container">
      <h3>Add a new Author</h3>
      <form className="input_form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            required
            placeholder="New Author"
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          <input
            required
            placeholder="email"
            type="text"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateAuthor;
