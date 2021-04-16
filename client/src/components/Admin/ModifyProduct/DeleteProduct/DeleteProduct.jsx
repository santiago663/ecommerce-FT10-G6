// /*eslint-disable*/
// import axios from "axios"
// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import '../../../../scss/components/_deleteProduct.scss';

// function DeleteProduct() {

//     const allProducts = useSelector((store) => store.reducerProduct.allProductCache)

//     const [id, setId] = useState({ id: allProducts[0]?.id, confirm: false })

//     function handleInputChange(event) {
//         setId({ ...id, confirm: event.target.value })
//     }

//     //Handle input para product
//     function handleInputChangePr(event) {
//         event.preventDefault();
//         setId({ ...id, id: event.target.value })
//     }

//     function submitForm(event) {
//         if (id.confirm == "yes") axios.delete(`http://localhost:3001/delete/product/${id.id}`);
//     }

//     var key = 1;

//     return (
//         <div className="mainDivDP">
//             <h2>Delete Product</h2>
//             <div className="divDP">
//                 <form className="formDP" onSubmit={submitForm}>
//                     <div>
//                         Product:
//                         <select name="id" id="selectorPrDP" onChange={handleInputChangePr}>
//                             <option key={`AP${key++}`}> </option>
//                             {allProducts.map(p => <option key={`DP${key++}`} value={p?.id}>{p?.name.slice(0, 30)} --- {p?.author?.name}</option>)}
//                         </select>
//                     </div>
//                     <div>
//                         Confirm: <input type="text" placeholder="Type yes" onChange={handleInputChange} />
//                     </div>
//                     <input type="submit" value="Delete" />
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default DeleteProduct
