//---- Packages
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

//---- Styles
import "./Home.css";

import Product from "../models/product/Product";

<<<<<<< HEAD
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
=======
function Home() {
  return (
    <div>
        <img
          src="https://raw.githubusercontent.com/Megahack-LINGER/docs/main/imagens/BANNER_CORTADORA_A_LASER.jpg"
          alt="logo-linger"
          width="100%"
        />
  
      <figure>
        <img
          src="https://raw.githubusercontent.com/Megahack-LINGER/docs/main/imagens/logo-linger.png"
          alt="logo-linger"
          width="200"
        />
      </figure>

      <Product
        title="Máquina cortadora a laser"
        author="Leonardo joão IV"
        subtitle="Máquina de fazer picadinho de madeira a laiser"
        price="24.99"
      />

      <Product
        title="Perfume blacon"
        author="Ramon dom joão 1"
        subtitle="emprestasse perfume da marca Blacon"
        price="299.98"
      />
      
      <Link to="/busca">Busca avançada</Link>
    </div>
  );
>>>>>>> 0cdac5891b44f15dda94f6b47036d767c7a13367
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
