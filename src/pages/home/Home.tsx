//---- Packages
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

//---- Styles
import "./Home.css";

import Product from "../models/product/Product";

import firebase from "../../services/FirebaseServices";

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
}

export default class Home extends React.Component<State> {
  state: State = {
    products: [],
  };

  async getDatas() {
    var datas = await firebase.firestore().collection("products").get();
    datas.forEach((item) => {
      this.setState({ products: [...this.state.products, item.data()] });
      console.log(this.state.products);
    });
    this.state.products.map((item) => {
      console.log(item.title);
    });
  }

  async componentDidMount() {
    await this.getDatas();
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
