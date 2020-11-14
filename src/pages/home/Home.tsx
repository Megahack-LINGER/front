//---- Packages
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

//---- Styles
import "./Home.css";

import Product from "../models/product/Product";

import firebase from "../../services/FirebaseServices";
import Axios from "axios";

interface State {
  products: {
    id: string;
    title: string;
    subtitle: string;
    id_author: string;
    cep_origem: string;
    image: Array<string>;
    price: number;
  }[];
  city: string;
}

export default class Home extends React.Component<State> {
  state: State = {
    products: [],
    city: "",
  };

  async getCity(lat: number, lon: number) {
    var api = (
      await Axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=0413d527b0264812850b4ee3eeddff13`
      )
    ).data;
    console.log(api["results"][0]["components"]["city_district"]);
    this.setState({ city: api["results"][0]["components"]["city_district"] });
    localStorage.setItem("city", api["results"][0]["components"]["city_district"])
  }

  async getLocation() {
    navigator.geolocation.getCurrentPosition(async (success) => {
      console.log(success.coords.latitude);
      console.log(success.coords.longitude);
      await this.getCity(success.coords.latitude, success.coords.longitude);
    });
  }

  async getDatas() {
    await this.getLocation();
    var datas = await firebase
      .firestore()
      .collection("products")
      .where("cidade", "==", this.state.city)
      .get();
    datas.forEach((item) => {
      this.setState({ products: [...this.state.products, item.data()] });
      console.log(this.state.products);
    });
  }

  async componentWillUpdate() {
    if (this.state.city == "") {
      await this.getDatas();
    }
  }

  render() {
    return (
      <div>
        <figure>
          <img
            src="https://raw.githubusercontent.com/Megahack-LINGER/docs/main/imagens/logo-linger.png"
            alt="logo-linger"
            width="200"
          />
        </figure>

        <div id="row">
          {this.state.products.map((item) => {
            return (
              <Product
                title={item.title}
                author="Leonardo joão IV"
                subtitle={item.subtitle}
                price={item.price}
                image={item.image}
                key={item.id}
              />
            );
          })}
        </div>

        <Link to="/busca">Busca avançada</Link>
      </div>
    );
  }
}
