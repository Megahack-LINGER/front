//---- Packages
import React, { useState } from 'react';
import { Link, Redirect, Switch } from 'react-router-dom';

//---- Styles
import "./Nav.css"

export default function Nav() {
    const [searchProduct, setSearchProduct] = useState("")
    return <div id="nav">
        <Switch>
            <nav>
                <input placeholder="Pesquise aqui" type="text" onChange={(e) =>
                    setSearchProduct(e.target.value)} />
                {searchProduct != "" ? <Redirect
                    to={{
                        pathname: "/busca",
                        search: searchProduct,
                        state: { text: searchProduct }
                    }}
                ></Redirect> : <Redirect to="/"></Redirect>}
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
