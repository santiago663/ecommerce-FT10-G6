/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../redux/actions/auth';
import '../../scss/components/_signIn.scss';
import { removeError } from '../../redux/actions/uiError'
import Swal from 'sweetalert2'

const SignIn = () => {
  const dispatch = useDispatch()
  const loading = useSelector((store) => store.reducerLoading.loading);
  const history = useHistory()
  const CurrentUser = localStorage.getItem('CurrentUser')
  const { msgError } = useSelector((store) => store.uiError)
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

  const handleError = () => {

  }

  const handleSignIn = (e) => {
    e.preventDefault()
    dispatch(startLoginEmailPassword(email, password));
    CurrentUser !== null ? history.push("/") : console.log("error")
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
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

export default SignIn;

