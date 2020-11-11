import React from 'react';

import "./Product.css"

import image1 from "../../../assets/images/maquina-laser.jpg";


export default class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            author: props.author,
            price: props.price,
            subtitle: props.subtitle
        }
    }

    render() {
        return (<div id="product" >
            <center>
                <figure>
                    <img id="image-product" src={image1} alt={this.state.title} />
                </figure>

                <hr color="#1768ac" />

                <h4 id="title" >{this.state.title}</h4>
                <p id="subtitle" >{this.state.subtitle}</p>
                <p id="price" >R${this.state.price}</p>
            </center>
        </div>)
    }
}