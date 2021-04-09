/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Catalogue from "../components/Catalogue/Catalogue.jsx";
import Admin from "../components/Admin/Admin.jsx";



export const routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/catalogo" component={Catalogue} />
                <Route path="/admin" component={Admin} />
            </Switch>
        </Router>
    );
}
