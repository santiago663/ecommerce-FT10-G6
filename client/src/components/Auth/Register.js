/*eslint-disable*/
import React, { useState } from 'react';
import '../../scss/components/_register.scss'
import validator from 'validator'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';
import { startRegister } from '../../redux/actions/auth';
import { Link } from 'react-router-dom';

const Register = () => {

    const dispatch = useDispatch()

    const [regState, setRegState] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    const { name, email, password, confirm } = regState;

    const handleInputChange = ({ target }) => {
        setRegState({
            ...regState,
            [target.name]: target.value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (isFormValid()) {
            dispatch(startRegister(name, email, password))
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
