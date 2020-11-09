import React from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';

import "./Nav.css"

export default function Nav() {
    return <div>
       
            <Switch>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/contato"> Contato</Link>
                </nav>
            </Switch>
       
    </div>
}