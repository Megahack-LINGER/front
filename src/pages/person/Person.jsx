import React from 'react';
import { Redirect } from 'react-router-dom';


import firebase from "../../services/FirebaseServices"

//---- Styles
import "./Person.css"

export default class Person extends React.Component {

    state = {
        email: "",
        photoUrl: "",
        name: "",
        linkPhoto: ""
    }

    async addPhoto(e) {
       await firebase.storage().ref("photoUsers").child(firebase.auth().currentUser.uid).put(e.target.files[0]).on("state_changed", snapshot => {
            console.log(snapshot)
        }, error => {
            console.log(error)
        }, async () => {
            console.log(".totalBytes")
            await this.fireStorage()
        })
    }

    async fireStorage() {
        await firebase.storage().ref("photoUsers/" + firebase.auth().currentUser.uid).getDownloadURL().then(async image => {
            console.log(image)
            localStorage.setItem("image", image)
            this.setState({ linkPhoto: image })
            await this.update()
        })
    }

    async update() {
        await firebase.auth().currentUser.updateEmail(this.state.email)
        localStorage.setItem("name", this.state.name)
        await firebase.auth().currentUser.updateProfile({
            "displayName": this.state.name,
            "photoURL": this.state.linkPhoto
        })
        window.location.reload()
        }

    async componentWillMount() {
        this.setState({
            email: localStorage.getItem("email") != null ? localStorage.getItem("email") : await firebase.auth().currentUser.email,
            photoUrl: localStorage.getItem("image") != null ? localStorage.getItem("image") : await firebase.auth().currentUser.photoURL,
            name: localStorage.getItem("name") != null ? localStorage.getItem("name") : await firebase.auth().currentUser.displayName
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
                            <input type="file" draggable="true" onChange={async (e) => await this.addPhoto(e)} />
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
