import React from "react";

import firebase from "../../services/FirebaseServices";

import "./Busca.css";

import mapMarkerImg from "../../assets/images/map-marker.svg";
import Product from "../models/product/Product";



export default class Contato extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      produto: {
        "title": ""
      },
    };
  }


  async searchData() {
    if (this.state.produto.title == "") {
      var splitado = await window.location.href.split("?")
      console.log(await splitado)

      try {
        var city = localStorage.getItem("city")
        var data = (await firebase.firestore().collection("products").where("title", "==", splitado[1]).where("cidade", "==", city).get()).docs[0].data()
        console.log(data)
        this.setState({ produto: data });
      } catch (e) {
        console.log(e)
      }
    }


    //console.log(this.state.products);


    /*this.state.products.map((item) => {
      console.log(item.title);
    });*/
  }

  async componentWillUpdate() {
    await this.searchData()

  }

  render() {

    return (
      <div id="page-map">
        <div>
          <h1>Busca</h1>
        </div>

        <aside>

          <header>
            <img src={mapMarkerImg} alt="Happy" />

            <p>Alguém precisa de uma ferramenta :)</p>
          </header>

        </aside>
        <hr />

        {this.state.produto.title != "" ?

          <Product
            title={this.state.produto.title}
            author="Leonardo joão IV"
            subtitle={this.state.produto.subtitle}
            price={this.state.produto.price}
            image={this.state.produto.image}
            key={this.state.produto.id}
          />

          : <h2>Buscando....</h2>}


      </div>
    );
  }
}
