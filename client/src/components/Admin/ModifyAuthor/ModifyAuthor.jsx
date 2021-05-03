/*eslint-disable*/
import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { useSelector} from 'react-redux';
import AuthorForm from './AuthorForm/AuthorForm'
import EditAuthor from './AuthorForm/EditAuthor'
import '../../../scss/components/_filterProductByAuthor.scss';

const ModifyAuthor = () => {

    const allArtist = useSelector((store) => store.reducerArtist.allArtistCache)
 
    const [input, setInput] = useState(0);

    const handleChange = (id) => {
        
        if(id.target.value !== 0){
           setInput(id.target.value); 
        }    
    }

    let author = [];
    if(input !== 0){
        author = allArtist.filter(f => f.id === Number(input))
    }
    

    return ( 
        <div className='ModifyProduct'>
            <div className='FilterAndProducts'>
                <div className='authorFilter'>
                    <select 
                        name="authorId" 
                        className="selector"
                        id="selectorArAP" 
                        onChange={handleChange}
                    >
                        <option value="" disabled selected >Exciting Authors</option>    
                        {allArtist.map(a => <option value={a.id}>{a.name}</option>)}
                    </select>
                </div>
                <div className="productContainer">
                    {author.length !== 0
                    ?<ul>
                        {author.map(m => {
                            return(
                                <li className="product" key={m.id}>
                                    <Link to={`/Admin/Author/Edit/${m.id}`}>
                                        <h4>{m.name}</h4>
                                        <p>{m.email}</p>
                                    </Link>
                                </li>           
                            )
                        })}
                    </ul>
                    :null
                    } 
                </div>
            </div>
            <div className='compProd'>
                <Route exact path="/Admin/Author" component={AuthorForm} />
               
                <Route exact path="/Admin/Author/Edit/:id" component={EditAuthor} />
            </div>
        </div>

    );
}
export default ModifyAuthor;