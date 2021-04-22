/*eslint-disable*/
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './Components/Profile'
import '../../scss/containers/_dashboardUser.scss'

export default function DashboardUser() {
    return (
        <Fragment>
            <Router>
            <div className="container-dashboard">
            <Route exact path="/user" component={Profile} />
            {/* <Route exact path="/user/library" component={UserLibrary} />
            <Route exact path="/user/orders" component={UserOrder} />
            <Route exact path="/user/settings" component={UserSettings} />
            <Route exact path="/user/questions" component={Questions} />  */}
            </div>
            </Router>
        </Fragment>
    )
}
