/*eslint-disable*/
import React, { Fragment } from 'react'
import Menu from './Components/Menu'
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function DashboardUser() {

    return (
        <Fragment>
            <Router>
            <Menu/>
            {/* <Route exact path="/user" component={UserProfile} />
            <Route exact path="/user/library" component={UserLibrary} />
            <Route exact path="/user/orders" component={UserOrder} />
            <Route exact path="/user/settings" component={UserSettings} />
            <Route exact path="/user/questions" component={Questions} /> */}
            </Router>
        </Fragment>
    )
}
