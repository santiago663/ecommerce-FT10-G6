/*eslint-disable*/
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../../../scss/components/_profileuser.scss'
import { UserData } from './SidebarData'
export default function Profile() {
    const currentUser = useSelector((store) => store.auth.currentUser)
    const [inputs, setInputs] = useState({
        name: " ",
        email: " ",
        phone: 0,
        location: 'Argentina, Córdoba'
    })

    useEffect(() => {
        setInputs({
            ...inputs,
            name: currentUser.name,
            email: currentUser.email,
            phone: currentUser.phone_Number
        })
    }, [])

    const handleInputChange = (e) => {
        e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

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
                        <div className="data">
                            <label htmlFor="#" className='inputs-profile'>
                                NAME
                    </label>
                            <input className='ipro' type="text" value={inputs.name} name='name' onChange={handleInputChange} />
                        </div>
                        <div className="data">
                            <label htmlFor="#" className='inputs-profile'>
                                PHONE
                    </label>
                            <input className='ipro' type="text" value={inputs.phone} name='phone' onChange={handleInputChange} />
                        </div>
                        <div className="data">
                            <label htmlFor="#" className='inputs-profile'>
                                EMAIL
                    </label>
                            <input className='ipro' type="text" value={inputs.email} name='email' onChange={handleInputChange} />
                        </div>
                        <div className="data">
                            <label htmlFor="#" className='inputs-profile'>
                                LOCATION
                    </label>
                            <input className='ipro' type="text" value={inputs.location} name='location' onChange={handleInputChange} />
                        </div>
                    </div>
                <div className="imagecover"></div>

                </div>
            </div>
            <div className="profile-footer">

            </div>
        </div>
    )
}
