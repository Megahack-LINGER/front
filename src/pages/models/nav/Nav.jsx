//---- Packages
import React from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';

//---- Styles
import "./Nav.css"

export default function Nav() {
    return <div id="nav">
        <Switch>
            <nav>
                <Link to="/">Principal</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/contact"> Contato</Link>
                {localStorage.getItem("email") == null ?
                    <Link to="/login">Login</Link> :
                    <Link to="/person">Conta</Link>}
            </nav>
        </Switch>
    </div>
}
