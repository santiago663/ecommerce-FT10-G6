/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import '../../scss/components/_signIn.scss'

const SignIn = () => {
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formState;

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
                <h5>Login</h5>
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
                <div className="input-field">
                    <button
                        type="submit"
                        className="btn"
                    >Login</button>
                </div>
                <div>
                    <p>Login whit social networks</p>
                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <div className="a-link a__signin">
                    <a href="#">Create New Account</a>
                </div>
            </form>
        </div>
    )
}

export default SignIn
