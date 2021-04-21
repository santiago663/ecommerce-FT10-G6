/*eslint-disable*/
import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRouteUser({ component: Component, ...rest }) {
   
   const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
   
return (
      <Route {...rest}
         render={props => {
            return currentUser?.role.description === "Registered" ? <Component {...props} /> : <Redirect to="/signin" />
         }}>
      </Route>
   )
}
