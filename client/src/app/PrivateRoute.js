/*eslint-disable*/
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
   const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
   console.log(currentUser)
    return (
       <Route {...rest}  
       render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/signin"/>
     }}> 
       </Route>
    )
}
