import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React from 'react';

import "leaflet/dist/leaflet.css"

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
        return <div>
            <center>
                produto
                <MapContainer center={[this.state.lat, this.state.lon]} zoom={12} style={{ width: "60vw", height: "60vh" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[this.state.lat, this.state.lon]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>

            </center>
        </div>
    }
}