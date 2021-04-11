/* eslint-disable */
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllArtists } from '../../redux/actions/index';
import './AddProduct.css';

function AddProduct() {
  const dispatch = useDispatch();

  const allArtist = useSelector((store) => store.allArtistCache);
  dispatch(getAllArtists());
  // const series = useSelector(store => store.series)

  const availableOption = document.querySelectorAll('#selectorAvAP option');
  const artistOption = document.querySelectorAll('#selectorArAP option');

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    available: true,
    fileLink: '',
    preview: '',
    categories: [],
    authorId: 1,
    seriesId: null,
  });

  function handleInputChange(event) {
    setProduct({ ...product, [event.target.name]: event.target.value });
  }

  // Handle input para price
  function handleInputChangePr(event) {
    setProduct({ ...product, [event.target.name]: Number(event.target.value) });
  }

  // Handle input para available
  function handleInputChangeAv(event) {
    event.preventDefault();
    let option = false;
    for (let i = 0; i < availableOption.length; i += 1) {
      if (availableOption[i].selected) {
        if (availableOption[i].value === 'Yes') option = true;
        else option = false;
      }
    }
    setProduct({ ...product, [event.target.name]: option });
  }

  // Handle input para artist
  function handleInputChangeAr(event) {
    event.preventDefault();
    let option = 1;
    for (let i = 0; i < artistOption.length; i += 1) {
      if (artistOption[i].selected) {
        option = artistOption[i].value;
        console.log(artistOption[i].value);
      }
    }
    setProduct({ ...product, [event.target.name]: Number(option) });
  }

  function submitForm(event) {
    console.log(product);
    event.preventDefault();
    axios.post('http://localhost:3001/products', product);
  }

  let key = 1;

  return (
    <div className="mainDivAP">
      <h2>Add Product</h2>
      <div className="divAP">
        <form className="formAP" onSubmit={submitForm}>
          <div>
            Name:
            <input type="text" onChange={handleInputChange} name="name" />
          </div>
          <div>
            Description:
            <input type="text" onChange={handleInputChange} name="description" />
          </div>
          <div>
            Price:
            <input type="text" onChange={handleInputChangePr} name="price" />
          </div>
          <div>
            Available:
            <select name="available" id="selectorAvAP" onChange={handleInputChangeAv}>
              <option key={`AP${key += 1}`} value="Yes">Yes</option>
              <option key={`AP${key += 1}`} value="No">No</option>
            </select>
          </div>
          <div>
            Categories:
            <input type="text" onChange={handleInputChange} name="categories" value="Coming soon" readOnly />
          </div>
          <div>
            FileLink:
            <input type="text" onChange={handleInputChange} name="fileLink" />
          </div>
          <div>
            Preview:
            <input type="text" onChange={handleInputChange} name="preview" />
          </div>
          <div>
            Artist:
            <select name="authorId" id="selectorArAP" onChange={handleInputChangeAr}>
              {allArtist.map((a) => (<option key={`AP${key += 1}`} value={a.idAuthors}>{a.name}</option>))} 
            </select>
          </div>
          <div>
            Series:
            <input type="text" onChange={handleInputChange} name="series" value="Coming soon" readOnlyi />
          </div>
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
