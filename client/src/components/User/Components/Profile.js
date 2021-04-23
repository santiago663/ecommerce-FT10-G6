/*eslint-disable*/
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editCurrentUser } from '../../../redux/actions/actionUser'
import { removeError } from '../../../redux/actions/uiError'
import Swal from 'sweetalert2'
import '../../../scss/components/_profileuser.scss'
export default function Profile() {

    const { currentUser } = useSelector((store) => store.auth)
    const { msgError } = useSelector((store) => store.uiError)
    const dispatch = useDispatch()
    const [ active, setActive ] = useState(false)
    const [user, setInputs] = useState({
        available: true,
        email: "",
        id: 0,
        location_id: 0,
        name: "",
        password: "",
        phone_Number: 0,
        role: {},
        roleId: 0,
    })

    useEffect(() => {
        setInputs({
            ...user,
            id: currentUser.id,
            name: currentUser.name,
            email: currentUser.email,
            available: currentUser.available,        
            location_id: currentUser.location_id,
            password: currentUser.password,
            phone_Number: currentUser.phone_Number,
            role: currentUser.role,
            roleId: currentUser.roleId,
        })
    }, [currentUser])

    const handleInputChange = (e) => {
        e.preventDefault();
        setActive(true)
        setInputs({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submitUpdateProfile = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              setActive(false);
              dispatch( editCurrentUser(currentUser.id, user) );
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                setInputs({
                    ...user,
                    id: currentUser.id,
                    name: currentUser.name,
                    email: currentUser.email,
                    available: currentUser.available,        
                    location_id: currentUser.location_id,
                    password: currentUser.password,
                    phone_Number: currentUser.phone_Number,
                    role: currentUser.role,
                    roleId: currentUser.roleId,
                })
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    
    }
   
    msgError !== null && Swal.fire({
        title: 'Error!',
        text: msgError,
        icon: 'error',
        confirmButtonText: 'Cool'
      }).then(() => {
        dispatch(removeError())
      })

    return (
        <div className='profile-container'>
            <div className='profile-body'>
                <div className="title">
                    <h1>Profile</h1>
                    <h2>about me</h2>
                </div>
                <hr className='divisor' />
                <div className='user-info'>
                    <div className="container-user-info">
                        <form onSubmit = {submitUpdateProfile}>
                        <div className="data">
                            <label htmlFor="#" className='inputs-profile'>
                                NAME
                            </label>
                            <input className='ipro' type="text" value={user.name} name='name' onChange={handleInputChange} />
                        </div>
                        <div className="data">
                            <label htmlFor="#" className='inputs-profile'>
                                PHONE
                        </label>
                            <input className='ipro' type="tel" pattern="[0-9]{3}[0-9]{6}" value={user.phone_Number} name='phone_Number' onChange={handleInputChange} />
                        </div>
                        <div className="data">
                            <label htmlFor="#" className='inputs-profile'>
                                EMAIL
                        </label>
                            <input disabled className='ipro' type="text" value={user.email} name='email' onChange={handleInputChange} />
                        </div>
                        <div className="data">
                            <label htmlFor="#" className='inputs-profile'>
                                LOCATION
                        </label>
                            <input className='ipro' type="text" value={user.location_id} name='location' onChange={handleInputChange} />
                        </div>
                        <button type="submit" className={active ? "btn-active" : "btn-inactive" } >Save</button>
                        </form>
                    </div>
                    <div className="imagecover"></div>

                </div>
            </div>
            <div className="profile-footer">

            </div>
        </div>
    )
}
