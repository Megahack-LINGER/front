import React from 'react';
import { Link } from 'react-router-dom';
import firebase from "../../../services/FirebaseServices"

import "./Cadastro.css"

export default class Cadastro extends React.Component {

    state = {
        email: '',
        password: ''
    }

    async cadastrar() {
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            console.log("Feito")
            console.log(user.user.displayName)
        }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (<div id="cadastro">
            <h2>Cadastro</h2>
            <label>
                Email: 
                <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
            </label>
            <label>
                Senha: 
                <input type="password" value={this.state.password} onChange={(p) => this.setState({ password: p.target.value })} />
            </label>
            <button type="submit" onClick={async() => await this.cadastrar()}>Cadastro</button>
            <p>Já tem uma conta? Faça Login: </p><Link to="/login">Login</Link>
        </div>)
    }
}