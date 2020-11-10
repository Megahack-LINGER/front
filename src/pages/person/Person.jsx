import React from 'react';
import firebase from "../../services/FirebaseServices"

export default class Person extends React.Component {
    render() {
        if (firebase.auth().currentUser.email != null) {
            return (
                <div id="person">
                    <h2>Person</h2>
                </div>);
        } else {
            return (<div id=""><h2>EAEEE</h2></div>)
        }

    }
}
