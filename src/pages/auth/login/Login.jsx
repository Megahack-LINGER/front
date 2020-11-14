import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from "../../../services/FirebaseServices"

import "./Login.css"

export default class Login extends React.Component {

    state = {
        email: '',
        password: '',
        logado: false
    }

    async login() {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            localStorage.setItem("email", this.state.email)
            this.setState({ logado: true })
            window.location.reload()
        }).catch((error) => {
            if (error.code === "auth/user-not-found") {
                console.log("Usuário não encontrado")
            } else {
                console.log(error)
            }
        })
    }
    render() {
        if (this.state.logado) {
            return <Redirect to="/" />
        } else {
            return (<div id="login">
                <h2>Login</h2>
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
                            <button type="submit" onClick={async () => await this.login()}>Logar</button>
                        </div>
                    </form>
                </div>
                <span>Não tem uma conta? Crie uma: <Link to="/cadastro">Cadastrar</Link></span>
            </div>
            )
        }
    }
}