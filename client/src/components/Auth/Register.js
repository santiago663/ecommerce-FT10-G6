/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeError } from '../../redux/actions/uiError'
import { startRegister } from '../../redux/actions/auth';
import { Link } from 'react-router-dom';
import validator from 'validator'
import Swal from 'sweetalert2'
import '../../scss/components/_register.scss'


const Register = () => {
    const { isLog } = useSelector((store) => store.auth)
    const { msgError } = useSelector((store) => store.uiError)
    const dispatch = useDispatch()

    useEffect(() => {
        isLog
          ? location.assign(process.env.REACT_APP_FRONT_URL)
          : console.log("error");
      }, [isLog])

    const [regState, setRegState] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        profilePic:'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
    });

    const { name, email, password, confirm, profilePic } = regState;

    const handleInputChange = ({ target }) => {
        setRegState({
            ...regState,
            [target.name]: target.value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (isFormValid()) {
            dispatch(startRegister(name, email, password, profilePic))
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            Swal.fire('Warning', 'Name is required', 'warning')
            return false;
        } else if (!validator.isEmail(email)) {
            Swal.fire('Warning', 'E-mail is not valid', 'warning')
            return false;
        } else if (password !== confirm || password.length < 5) {
            Swal.fire('Warning', 'Password should be at least 6 characters and match each other', 'warning')
            return false;
        }

        return true
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
        <div className="form-container">
            <form
                onSubmit={handleRegister}
                className="form"
            >
                <h5>Register</h5>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Name"
                        value={name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        autoComplete="off"
                        placeholder="E-mail"
                        value={email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="confirm"
                        className="form-control confirm"
                        placeholder="Confirm Password"
                        value={confirm}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="input-field register">
                    <button
                        type="submit"
                        className="btn"
                    >Register</button>
                </div>
                <Link to="/signin">
                    <div className="a__register">
                        <a href="#">Already registered?</a>
                    </div>
                </Link>
            </form>
        </div>
    )
}

export default Register
