//---- Packages
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

//---- Styles
import "./Home.css";

//--- Images
import image1 from "../../assets/images/maquina-laser.jpg";
import image2 from "../../assets/images/maquina-sublimacao.jpg";
import image3 from "../../assets/images/impressora3d.jpg";

import person1 from "../../assets/images/sublimacao.jpg";
import logo1 from "../../assets/images/logo-linger-2.png";
import Product from "../models/product/Product";

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
}

export default Home;
