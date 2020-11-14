import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from "../../../services/FirebaseServices"

import "./Cadastro.css"

export default class Cadastro extends React.Component {

    state = {
        email: '',
        password: '',
        cadastrado: false
    }

    async cadastrar() {
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            localStorage.setItem("email", this.state.email)
            this.setState({ cadastrado: true })
            window.location.reload()
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        if (this.state.cadastrado) {
            return <Redirect to="/" />
        } else {
            return (<div id="cadastro">
                <h2>Cadastro</h2>
                <div>
                    <form>
                        <label>
                            Email:
                <input type="email" required value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                        </label>
                        <br />
                        <label>
                            Senha:
                <input type="password" required value={this.state.password} onChange={(p) => this.setState({ password: p.target.value })} />
                        </label>

                        <div>
                            <button type="submit" onClick={async () => await this.cadastrar()}>Cadastro</button>
                        </div>
                    </form>
                </div>
                <span>Já tem uma conta? Faça Login: <Link to="/login">Login</Link></span>
            </div>)
        }
    }
}