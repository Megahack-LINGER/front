import React from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';

import firebase from "../../../services/FirebaseServices"

import "./Nav.css"

export default function Nav() {
    console.log(localStorage.getItem("email"))
    return <div>

        <Switch>
            <nav>
		<img src="https://raw.githubusercontent.com/Megahack-LINGER/docs/main/imagens/logo-linger-5.png" className="App-image" alt="logo" height="40" />
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
