//---- Packages
import React from "react";

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
    latitude: number;
    longetude: number;
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
    this.setState({
      city: await api["results"][0]["components"]["city_district"],
    });
    console.log(
      "Cidade onde estou pela API: " +
        (await api["results"][0]["components"]["city_district"])
    );
    localStorage.setItem(
      "city",
      await api["results"][0]["components"]["city_district"]
    );
    localStorage.setItem("lat", `${lat}`);
    localStorage.setItem("lon", `${lon}`);

    await this.getDatas();
  }

  async getLocation() {
    navigator.geolocation.getCurrentPosition(async (success) => {
      await this.getCity(success.coords.latitude, success.coords.longitude);
      console.log(success.coords.latitude);
      console.log(success.coords.longitude);
    });
  }

  async getDatas() {
    var datas = await firebase
      .firestore()
      .collection("products")
      .where("cidade", "==", this.state.city)
      .get();

    console.log("Cidade onde estou: " + this.state.city);
    datas.forEach(async (item) => {
      this.setState({ products: [...this.state.products, item.data()] });
    });
    console.log(this.state.products.length);
  }

  async componentDidMount() {
    if (window.screen.width >= 400) {
      if (this.state.city == "") {
        await this.getLocation();
      }
    } else {
      var datas = await firebase.firestore().collection("products").get();
      datas.forEach(async (item) => {
        this.setState({ products: [...this.state.products, item.data()] });
      });
      console.log(this.state.products.length);
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
                lat={item.latitude}
                lon={item.longetude}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
