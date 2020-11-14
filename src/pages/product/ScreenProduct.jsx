import { MapContainer, TileLayer, Circle } from "react-leaflet";
import React from 'react';

import "leaflet/dist/leaflet.css"
import "./ScreenProduct.css"

export default class Produto extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.location.state.produto)
        this.state = {
            title: props.location.state.produto.title,
            author: props.location.state.produto.author,
            price: props.location.state.produto.price,
            subtitle: props.location.state.produto.subtitle,
            image: props.location.state.produto.image,
            lat: props.location.state.produto.lat,
            lon: props.location.state.produto.lon,
        }
    }

    render() {
        return <div id="screen-product">
            <center>
                <figure id="image-produto">
                    <img id="image-produto" src={this.state.image[0]} />
                </figure>
    <h1>{this.state.title}</h1>
    <h3>{this.state.subtitle}</h3>
    <p>R${this.state.price} por hora</p>
                <MapContainer center={[this.state.lat, this.state.lon]} zoom={12} style={{ width: "60vw", height: "60vh", borderRadius: "20px" }} >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Circle center={[this.state.lat, this.state.lon]} radius={300} />
                </MapContainer>

            </center>
        </div>
    }
}