import React from 'react';


import firebase from "../../services/FirebaseServices"

//---- Styles
import "./Person.css"

export default class Person extends React.Component {

    state = {
        email: "",
        photoUrl: "",
        name: "",
    }

    async update() {
        await firebase.auth().currentUser.updateEmail(this.state.email)
        await firebase.auth().currentUser.updateProfile({
            "displayName": this.state.name,
            "photoURL": "https://cdn.pixabay.com/photo/2020/11/04/19/22/windmill-5713337__340.jpg"
        })
        window.location.reload()
    }

    async componentDidMount() {
        this.setState({
            email: await firebase.auth().currentUser.email != null ? firebase.auth().currentUser.email : "sem email",
            photoUrl: await firebase.auth().currentUser.photoURL != null ? firebase.auth().currentUser.photoURL : "sem image",
            name: await firebase.auth().currentUser.displayName != null ? firebase.auth().currentUser.displayName : "sem nome"
        })
    }

    render() {
        return (
            <div id="person">
                <center>
                    <figure id="img-perfil">
                        <img id="img-perfil" src={this.state.photoUrl} alt="Image perfil user" />
                    </figure>
                    <h2>Person</h2>
                    <h5>Bem vindo: {this.state.email}</h5>
                    <div>
                        <h4>Campos do usuário</h4>
                        <div>
                            <label>
                                Email:
                            <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Nome:
                            <input type="text" value={this.state.name} onChange={(n) => this.setState({ name: n.target.value })} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Foto de perfil:
                            <input type="file" draggable="true" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <button type="submit" onClick={async () => await this.update()}>Atualizar dados</button>
                    </div>
                </center>
            </div>);
    }
}
