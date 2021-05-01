/*eslint-disable*/
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';
import PrivateRouteUser from '../../app/PrivateRouteUser'
import Profile from './Components/Profile'
import '../../scss/containers/_dashboardUser.scss'
import UserOrder from './Components/UserOrders'
import OrderDetail from './Components/OrderDetail';
import Library from './Components/Library';
import Wishlist from './Components/Wishlist'

export default function DashboardUser() {
  return (
    <Fragment>
      <Route>
        <div className="container-dashboard">
        <div className='container-inner'>
          <PrivateRouteUser path="/user/library" component={Library} />
          <PrivateRouteUser path="/user/wishlist" component={Wishlist} />
          <PrivateRouteUser path="/user/profile" component={Profile} />
          <PrivateRouteUser path="/user/orders" component={UserOrder} />
          <PrivateRouteUser path="/user/orders/:id" component={OrderDetail} />
        </div>
        </div>
      </Route>
    </Fragment>
  )
}
