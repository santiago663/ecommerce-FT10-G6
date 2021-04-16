/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import { editAuthor, deleteAuthor } from '../../../../redux/actions/actionBack';
import '../../../../scss/components/_editProducts.scss';

function EditAuthor() {

    const {id} = useParams();

    const dispatch = useDispatch()

    const allArtist = useSelector((store) => store.reducerArtist.allArtistCache)
    const allCategories = useSelector((store) => store.reducerCategories.allCategoriesCache)
    const allSeries = useSelector((store) => store.reducerSeries.allSeriesCache)
    const allProducts = useSelector((store) => store.reducerProduct.allProductCache)

    const [author, setAuthor] = useState({
        id: 1,
        name: "",
        email: "",
    })

    const [boolean, setBoolean] = useState(false)

    useEffect(() => {
        const findAuthor = allArtist.find(f => f.id === Number(id))
       
        if (findAuthor?.id) {
          
            setAuthor({
                id: findAuthor.id,
                name: findAuthor.name,
                email: findAuthor.email,
            })
        }
        
    }, [id])

    function handleInputChange(event) {
        setAuthor({ ...author, [event.target.name]: event.target.value })
    }

    //Handle input para price
    function handleInputChangeEmail(event) {
        setAuthor({ ...author, [event.target.name]: event.target.value })
    }

    function submitForm(event) {
        
        dispatch( editAuthor(author.id, author) );
    }
    const deleteProducts = () => {
        setBoolean(true)
    }
    const Yes = () => {

        if(author.id){

            dispatch( deleteAuthor(author.id) );
        }
        setBoolean(false);
    }
    const No = () => {
        setBoolean(false);
    }

    var key = 1;

    return (
        <div className="mainDivEP">
            <h2 className="title">Edit Author</h2>
            <Link 
                className="nav-link" 
                to="/admin/Author"
            ><li>Add Author</li></Link>
            <div className="divEP">
                <form 
                    className="formEP" 
                    onSubmit={submitForm} 
                >
                    <div>
                        Name: 
                        <input 
                            className="input" 
                            type="text" 
                            onChange={handleInputChange} 
                            value={author.name} 
                            name="name" 
                        />
                    </div>
                    <div>
                        Email: 
                        <input 
                            className="input"
                            type="text" 
                            onChange={handleInputChangeEmail} 
                            value={author.email} 
                            name="email" 
                        />
                    </div>
                    <input 
                        className="EditAndDelete" 
                        type="submit" 
                        value="Edit" 
                    />
                    <input 
                        className="EditAndDelete"
                        type="button" 
                        value="Delete" 
                        onClick={deleteProducts} 
                    />
                </form>
            </div>
                {boolean === true ? 
                    <div className="divDelete">Do you want to delete this product?
                        <br/>
                        <button className="Yes" type="button" onClick={Yes}>Yes</button>
                        <button className="No" type="button" onClick={No}>No</button>
                    </div> : null
                }
        </div>
    );
}

export default EditAuthor
