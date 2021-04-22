/*eslint-disable*/
import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRouteGuest({ component: Component, ...rest }) {
   
   const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))

return (
      <Route {...rest}
         render={props => {
            return currentUser === null ? <Component {...props} /> : <Redirect to="/" />
         }}>
      </Route>
   )
}
