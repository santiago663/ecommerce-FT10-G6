/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import '../../scss/components/_register.scss'

const Register = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    const { name, email, password, confirm } = formState;

    useEffect(() => {
        console.log('formState cambió');
    }, [])

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submited');
    }

    return (
        <div className="form-container">
            <form
                onSubmit={handleSubmit}
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

                <div className="a__register">
                    <a href="#">Already registered?</a>
                </div>
            </form>
        </div>
    )
}

export default Register
