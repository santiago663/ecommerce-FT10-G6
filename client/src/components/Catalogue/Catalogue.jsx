/* eslint-disable */
import React from 'react';
import './Catalogue.styl';
import { useSelector } from 'react-redux'

function Catalogue() {

  const datos = useSelector(store => store.searchRecetas)
  console.log(datos);
  return (
    <div>
      <h1>Catálogo</h1>
    </div>
  );
}

export default Catalogue;
