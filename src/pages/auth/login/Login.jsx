import React from 'react';
import { Link } from 'react-router-dom';
import firebase from "../../../services/FirebaseServices"

import "./Login.css"

export default class Login extends React.Component {
    
    state = {
        email: '',
        password: ''
    }
    
    async login() {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            console.log(user.user.displayName)
            console.log("feito")
        }).catch((error) => {
            console.log(error)
        })
    }
    render(){
        return (<div id="login">
            <h2>Login</h2>
            <label>
                Email: 
                <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
            </label>
            <label>
                Senha: 
                <input type="password" value={this.state.password} onChange={(p) => this.setState({ password: p.target.value })} />
            </label>
            <button type="submit" onClick={async () => await this.login()}>Login</button>
            <p>Já tem uma conta? Faça Login: </p><Link to="/cadastro">Cadastro</Link>
        </div>)
    }
}