/*eslint-disable*/
import React from 'react';
import Catalogue from '../Catalogue/Catalogue';
import Azza from '../Filters/Azza';

// import '../../scss/containers/_products.scss';

function Products() {
  
  // Change Page Callback
  
  // if (loading) {
  //   return (
  //     <div className="loader-container">
  //       <Loading />
  //     </div>
  //   );
  // }
  return (
    <div>
      <Azza/>
      <Catalogue />
    </div>
  );
}

export default Products;
