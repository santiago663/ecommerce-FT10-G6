/*eslint-disable*/
import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
   
   const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
   
return (
      <Route {...rest}
         render={props => {
            return currentUser?.roleId === 100 ? <Component {...props} /> : <Redirect to="/signin" />
         }}>
      </Route>
   )
}
