/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Catalogue from "../components/Catalogue/Catalogue.jsx";
import Component from "../components/Component/Component.jsx";


export const routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Component} />
                <Route exact path="/catalogo" component={Catalogue} />
            </Switch>
        </Router>
    );
}
