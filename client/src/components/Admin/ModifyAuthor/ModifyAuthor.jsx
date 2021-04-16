/*eslint-disable*/
import React from 'react';
import AuthorForm from './AuthorForm/AuthorForm'
import '../../../scss/components/_modifyProduct.scss';

const ModifyAuthor = () => {
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
            </div>
        </div>

     );
}
export default ModifyAuthor;