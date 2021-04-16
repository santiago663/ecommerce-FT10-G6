/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAuthor } from  '../../../../redux/actions/actionBack';
import '../../../../scss/components/_editProducts.scss';

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
    <div className="mainDivEP">
      <h2 className="title">Add a new Author</h2>
      <div className="divEP">
        <form 
          className="formEP" 
          onSubmit={handleSubmit}
        >
          <div>
            <input
              required
              placeholder="New Author"
              className="input"
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              required
              placeholder="email"
              className="input"
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
