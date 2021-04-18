/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
   const [user, setUser] = useState({})
   const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
   
   useEffect(()=>{
      setUser(currentUser)
   },[currentUser])

    return (
       <Route {...rest}  
       render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/signin"/>
     }}> 
       </Route>
    )
}
