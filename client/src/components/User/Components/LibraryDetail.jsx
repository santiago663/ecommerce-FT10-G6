/*eslint-disable*/
import React from "react";
import * as AiIcons from 'react-icons/ai';
import Loading from '../../Loading/Loading'
import "../../../scss/components/_userLibraryDetail.scss";

function LibraryDetail(props) {  
  const {preview, setPreview} = props
 console.log(props)
  if(preview === undefined ) {
      return ( <Loading/>)
  } else {
  return (
    <div className="librarydetail-container">
        
      <div className="modalLibrary">
          <img src={preview} alt="preview"/>
      <div className="closeWindowLibrary" >
          
            <AiIcons.AiFillCloseCircle onClick={() => setPreview(false)}/>
      </div>
    
      </div>
    </div>
  );
}
}

export default LibraryDetail;
