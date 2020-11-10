import React from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';

import firebase from "../../../services/FirebaseServices"

import "./Nav.css"

export default function Nav() {
    console.log(localStorage.getItem("email"))
    return <div>
            <Switch>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/contact"> Contato</Link>
                    <Link to="/about">About</Link>
                    {localStorage.getItem("email") == null ? 
                    <Link to="/login">Login</Link> : 
                    <Link to="/person">Person</Link>}
                </nav>
            </Switch>
    </div>
}