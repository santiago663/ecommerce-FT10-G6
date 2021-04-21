/*eslint-disable*/
import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
   
   const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))

   const role = {...currentUser?.role}
   
return (
      <Route {...rest}
         render={props => {
            return currentUser?.role.description === "Admin" ? <Component {...props} /> : <Redirect to="/signin" />
         }}>
      </Route>
   )
}
