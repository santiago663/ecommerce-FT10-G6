/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleLogin, startLoginEmailPassword } from '../../redux/actions/auth';
import '../../scss/components/_signIn.scss'

const SignIn = () => {
    const dispatch = useDispatch()
    const loading = useSelector((store) => store.reducerLoading.loading);
    console.log(loading);

    const [signState, setSignState] = useState({
        email: '',
        password: ''
    });

    const { email, password } = signState;

    const handleInputChange = ({ target }) => {
        setSignState({
            ...signState,
            [target.name]: target.value
        })
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <div className="form-container">
            <form
                onSubmit={handleSignIn}
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
                <div
                    className="input-field">
                    <button
                        type="submit"
                        className="btn"
                        disabled={loading}
                    >Login</button>
                </div>
                <div>
                    <p>Login whit social networks</p>
                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
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
