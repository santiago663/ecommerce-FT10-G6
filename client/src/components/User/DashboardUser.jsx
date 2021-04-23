/*eslint-disable*/
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';
import Profile from './Components/Profile'
import '../../scss/containers/_dashboardUser.scss'
import UserOrder from './Components/UserOrders'

export default function DashboardUser() {
  return (
    <Fragment>
      <Route>
        <div className="container-dashboard">
        <div className='container-inner'>
          <Route exact path="/user/profile" component={Profile} />
          <Route exact path="/user/orders" component={UserOrder} />
        </div>
        </div>
      </Route>
    </Fragment>
  )
}
