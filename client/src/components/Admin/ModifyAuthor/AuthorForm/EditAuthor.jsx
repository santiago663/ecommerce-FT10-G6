/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { editAuthor, deleteAuthor } from '../../../../redux/actions/actionBack';
import '../../../../scss/components/_editProducts.scss';

function EditAuthor() {

    const {id} = useParams();

    const dispatch = useDispatch()

    const allArtist = useSelector((store) => store.reducerArtist.allArtistCache)
    const productOrError = useSelector((store) => store.reducerErrorRoutes.stateAction)

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
    const alertSucces = () =>{
        Swal.fire({
           title: "Producto Creado",
           icon: "success",
           timer: "1500",
           showConfirmButton: false,
        })
    }
    const alertError = () =>{
        Swal.fire({
           title: "Error Al crear el Producto",
           icon: "error",
           timer: "2500",
           showConfirmButton: false,
        })
    }

    if(productOrError.status === 200){

        alertSucces();
        productOrError.status = 0
    }
    if(typeof productOrError.status === 'number' && productOrError.status !== 200 && productOrError.status !== 0){
        alertError();
        productOrError.status = 0
    }

    return (
        <div className="mainDivEP">
            <h2 className="title">Edit Author</h2>
            <Link 
                className="nav-link" 
                to="/Admin/Author"
            ><li>Add Author</li></Link>
            <div className="divEP">
                <form 
                    className="formEP" 
                    onSubmit={submitForm} 
                >
                    <div>
                        Name: 
                        <input 
                            required
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
                            required 
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
