/*eslint-disable*/
import React from 'react';
import { useDispatch } from 'react-redux';
// import {} from '../../redux/actions/index'


function Azza() {
    const dispatch = useDispatch();

    return (
        <div className="fil-azza">
            <h4>OrdenAlfabetico</h4>
            <button className="searchbar-filters--btn_active"
                type="button"
            >"A-Z"</button>
            <button className="searchbar-filters--btn_active"
                type="button"
            >"Z-A"</button>
        </div>
    )
}
export default Azza;