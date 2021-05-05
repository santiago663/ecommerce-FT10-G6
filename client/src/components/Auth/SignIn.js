/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleLogin,
  startLoginEmailPassword,
  resetPassword,
} from "../../redux/actions/auth";
import { removeError } from "../../redux/actions/uiError";
import "../../scss/components/_signIn.scss";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.reducerLoading.loading);
  const { isLog } = useSelector((store) => store.auth);
  const { msgError } = useSelector((store) => store.uiError);
  const [signState, setSignState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = signState;

  useEffect(() => {
    if (isLog) location.assign(process.env.REACT_APP_FRONT_URL);
  }, [isLog]);

  const handleInputChange = ({ target }) => {
    setSignState({
      ...signState,
      [target.name]: target.value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const handleResetPassword = () => {
    dispatch(resetPassword(signState.email));
  };

  msgError !== null &&
    Swal.fire({
      title: msgError.title ? msgError.title : "Error",
      text: msgError.msg ? msgError.msg : msgError,
      icon: msgError.icon ? msgError.icon : "error",
      confirmButtonText: "OK",
    }).then(() => {
      dispatch(removeError());
    });

  return (
    <div className="form-container">
      <form onSubmit={handleSignIn} className="form">
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
          <button type="submit" className="btn" disabled={loading}>
            Login
          </button>
          <a className="reset" href="#" onClick={() => handleResetPassword()}>
            Reset password
          </a>
        </div>
        <div>
          <p>Login whit social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to='/register'>
          <div className="a-link a__signin">
            <a href="#">Create New Account</a>
            <br />
          </div>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
