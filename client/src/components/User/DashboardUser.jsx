/*eslint-disable*/
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';
import Profile from './Components/Profile'
import '../../scss/containers/_dashboardUser.scss'
import UserOrder from './Components/UserOrders'
import OrderDetail from './Components/OrderDetail';

export default function DashboardUser() {
  return (
    <Fragment>
      <Route>
        <div className="container-dashboard">
        <div className='container-inner'>
          <Route path="/user/profile" component={Profile} />
          <Route path="/user/orders" component={UserOrder} />
          <Route path="/user/orders/:id" component={OrderDetail} />
        </div>
        </div>
      </Route>
    </Fragment>
  )
}
