/*eslint-disable*/
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterAlphabetic } from '../../redux/actions/actionFront'


function Azza() {
    const dispatch = useDispatch();

    return (
        <div className="fil-azza">
            <h4>OrdenAlfabetico</h4>
            <button className="searchbar-filters--btn_active"
                type="button" onClick={()=>dispatch(filterAlphabetic(0))}
            >"A-Z"</button>
            <button className="searchbar-filters--btn_active"
                type="button" onClick={()=>dispatch(filterAlphabetic(1))}
            >"Z-A"</button>
        </div>
    )
}
export default Azza;