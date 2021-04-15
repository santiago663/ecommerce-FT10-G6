/*eslint-disable*/
import React from 'react';
import CategoryForm from './AddCategoryForm/CategoryForm';
import '../../../scss/components/_modifyProduct.scss';

const ModifyCategory = () => {
    return ( 
        <div className='ModifyProduct'>
            <div className='SearchProduct'>

                 <form /*onSubmit={} */>
                    <label htmlFor="input">
                    <input
                        type="text"
                        name="input"
                        placeholder="Browse our gallery..."
                    />
                    </label>
                    <div >
                        <button
                            type="submit"
                        >
                            Search!
                        </button>
                    </div>
                    <div>
                        <option>Obra 1</option>
                        <option>Obra 2</option>
                        <option>Obra 3</option>
                        <option>Obra 4</option>
                        <option>Obra 5</option>
                    </div>
                </form>
            </div>
            <div className='compProd'>
                <CategoryForm />
                {/* <DeleteProduct />
                <EditProduct /> */}
            </div>
        </div>

     );
}
export default ModifyCategory;