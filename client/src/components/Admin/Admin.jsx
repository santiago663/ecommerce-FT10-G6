import React, { useState } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import EditProduct from '../EditProduct/EditProduct';
import CategoryForms from '../AddCategoryForm/CategoryForm';
import AuthorForm from '../AuthorForm/AuthorForm';

function Admin() {
  return (
    <div>
      <AddProduct />
      <EditProduct />
      <DeleteProduct />
      <CategoryForms />
      <AuthorForm />
    </div>
  );
}

export default Admin;
