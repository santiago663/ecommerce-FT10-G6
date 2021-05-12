/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { editAuthor, deleteAuthor } from '../../../../redux/actions/actionAuthors';
import { upgradeEditAuthors } from '../../../../redux/actions/actionUpgrade';

function EditAuthor() {

    const {id} = useParams();

    const dispatch = useDispatch()

    const allArtist = useSelector((store) => store.reducerArtist.allArtistCache)
    const productOrError = useSelector((store) => store.reducerErrorRoutes.stateAction)

    const [author, setAuthor] = useState({
        id: 0,
        name: "",
        email: "",
        available: true,
    })

    const [boolean, setBoolean] = useState(false)

    useEffect(() => {
        const findAuthor = allArtist.find(f => f.id === Number(id))
       
        if (findAuthor?.id) {
          
            setAuthor({
                id: findAuthor.id,
                name: findAuthor.name,
                email: findAuthor.email,
                available: findAuthor.available
            })
        }
        
    }, [id])

    function handleInputChange(event) {

        let name = event.target.name;
        if(name !== "" && name !== " "){
            setAuthor({ ...author, [name]: event.target.value })
        }
    }

    //Handle input para price
    function handleInputChangeEmail(event) {

        let email = event.target.name;
        if(email !== "" && email !== " "){
            setAuthor({ ...author, [email]: event.target.value })
        }
    }

    //Handle input para available
    function handleInputChangeAv(event) {
        event.preventDefault();
        var option;
        if (event.target.value === "Yes") option = true;
        if (event.target.value === "No") option = false;
        setAuthor({ ...author, [event.target.name]: option })
    }

    const alertSucces = () =>{
        Swal.fire({
           title: productOrError.data.message,
           icon: "success",
           timer: "1500",
           showConfirmButton: false,
        })
    }

    function submitForm(event) {
        event.preventDefault();

        dispatch( editAuthor(author.id, author) );

    }
    const deleteAuthors = () => {
        setBoolean(true)
    }
    const Yes = () => {

        if(author.id !== 0){

            dispatch( deleteAuthor(author.id) );

        }
        setBoolean(false);
    }
    const No = () => {
        setBoolean(false);
    }

    if(productOrError.status === 200){

        alertSucces();
        if(id){
            let allArtistCop = allArtist
            if(author.id !==0 ){

                let indice = allArtistCop.findIndex((elemento) => {
                    
                    if(elemento.id === Number(id)) return true;
                });
                
                if(indice !== -1 ){
                    
                    allArtistCop[indice] = author
                }
                allArtistCop=[] 
            }
            if(allArtistCop.length !== 0)upgradeEditAuthors(allArtistCop);      
        } 
        productOrError.status = 0
    }
    if(productOrError.status === 205){

        alertSucces();
        productOrError.status = 0
    }

    var key = 1;

    return (
        <div className="mainDivEP">
            <h2 className="titleCat">Edit Author</h2>
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
                            className="inputprod" 
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
                            className="inputprod"
                            type="text" 
                            onChange={handleInputChangeEmail} 
                            value={author.email} 
                            name="email" 
                        />
                    </div>
                    <div>
                        Available:
                        <select 
                            name="available" 
                            id="selectorAvEP"
                            className="selector" 
                            value={author.available ? "Yes" : "No"} 
                            onChange={handleInputChangeAv}
                        >
                            <option key={`EP${key++}`} value="Yes">Yes</option>
                            <option key={`EP${key++}`} value="No">No</option>
                        </select>
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
                        onClick={deleteAuthors} 
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
