/*eslint-disable*/
import React from "react";
import AddProduct from "../AddProduct/AddProduct"
import DeleteProduct from "../DeleteProduct/DeleteProduct"
import EditProduct from "../EditProduct/EditProduct"

function Admin () {

    return (
        <div>
            <AddProduct/>
            <EditProduct/>
            <DeleteProduct/>
        </div>
    )
}

export default Admin