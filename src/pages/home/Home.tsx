import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./Home.css";

import image1 from "../../assets/images/maquina-laser.jpg";
import image2 from "../../assets/images/maquina-sublimacao.jpg";
import image3 from "../../assets/images/sublimacao.jpg";

function Home() {
  return (
    <div>
      <main>
        <div>
          <h1>LINGER apresenta:</h1>
          <h1>TOOL4U</h1>
          <p>Uma plataforma de uso colaborativo de ferramentas e máquinas.</p>
        </div>

        <br />

        <div>
          <header>
            <h2>Encontre a ferramenta que precisa</h2>
            <p>Produza e faça networking</p>
          </header>
        </div>

        <hr color="#1768AC" style={{ borderRadius: "40px", width: 150 }} />

        <div>
          <p>MEGA HACK 5.0</p>
          <h1>Quem Somos</h1>
          <p>Uma startup inovadora que ajuda empreededores.</p>
        </div>

        <hr color="#1768AC" style={{ borderRadius: "40px", width: 300 }} />
        <h1>O que Fazemos?</h1>
        
        <p>
          Conectamos empreendedores que oferecem e buscam máquinas e
          ferramentas.
        </p>

        <hr color="#1768AC" style={{ borderRadius: "40px", width: 70 }} />

        <div>
          <h1>Como Funciona?</h1>
          <p>Encontramos profissionais em busca de máquina para produzir.</p>
          <p>Encontramos profissionais que oferecem equipamentos ociosos.</p>
          <p>Conectamos os empreendedores por localidade.</p>
          <p>Oferecemos uma forma de pagamento seguro.</p>
          <p>Garantimos a devolução do equipamento.</p>
        </div>

        <hr color="#1768AC" style={{ borderRadius: "40px", width: 260 }} />
        
        <div>
          <h1>Sobre Nós</h1>
        </div>
      </main>
    </div>
  );
}

export default Home;
