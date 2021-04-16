/*eslint-disable*/
import React, { useState } from 'react';
import '../../scss/components/_register.scss'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../redux/actions/uiError';
import { startRegister } from '../../redux/actions/auth';

const Register = () => {

    const { msgError } = useSelector(state => state.uiError)
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

    //VALIDACION DEL FORM
    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required'))
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('E-mail is not valid'))
            return false;
        } else if (password !== confirm || password.length < 5) {
            dispatch(setError('Password should be at least 6 characters and match each other'))
            return false;
        }
        dispatch(removeError())
        return true
    }

    return (
        <div className="form-container">
            <form
                onSubmit={handleRegister}
                className="form"
            >
                <h5>Register</h5>
                {msgError &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
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

                <div className="a__register">
                    <a href="#">Already registered?</a>
                </div>
            </form>
        </div>
    )
}

export default Register
