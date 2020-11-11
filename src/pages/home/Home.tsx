import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

import "./Home.css";

import image1 from '../../assets/images/maquina-laser.jpg';
import image2 from '../../assets/images/maquina-sublimacao.jpg';
import image3 from '../../assets/images/impressora3d.jpg';

import person1 from '../../assets/images/sublimacao.jpg';
import logo1 from '../../assets/images/logo-linger-2.png';

function Home() {
  return (
    <div>
      <img src="https://raw.githubusercontent.com/Megahack-LINGER/docs/main/imagens/Banners.jpg" className="App-image" alt="logo" width="100%" />
      <header>
	      <img src="https://raw.githubusercontent.com/Megahack-LINGER/docs/main/imagens/logo-linger.png" className="App-image" alt="logo" width="200" />
      </header>

      <main> 
	      <h1>Apresenta</h1>
	      <img src="https://raw.githubusercontent.com/Megahack-LINGER/docs/main/imagens/logo-tool4u.png" className="App-image" alt="logo" width="200" />
              <h3>A plataforma para compartilhamento de ferramentas</h3>
	      <hr color="#1768AC" style={{ borderRadius: "40px", width: 300 }} />
              <h1>Ofereça</h1>
              <p>Ofereça uma ferramenta que está ociosa aqui</p>
              <table width="100%" ><tr> 
		      <td><img src={image1} className="App-image" alt="logo" width="200" /><br/><b>Máquina cortadora a laser</b> <br/>Leonardo<br/>Mais ... </td>
		      <td><img src={image2} className="App-image" alt="logo" width="200" /><br/><b>Kit de sublimação</b> <br/>Nicolas<br/>Mais ... </td>
		      <td><img src="https://raw.githubusercontent.com/Megahack-LINGER/docs/main/imagens/impressora3d.jpg" className="App-image" alt="logo" width="200" /><br/><b>Impressora 3D</b> <br/>Nicolas<br/>Mais ... </td>
              </tr></table> 
	      <br/>
              <hr color="#1768AC" style={{ borderRadius: "40px", width: 300 }} />
              <h1>Busque</h1>
	      <p>Encontre a ferramenta que precisa ou busque alguém para oferecer o seu equipamento</p>
	      <table width="100%" ><tr>
                      <td><img src={person1} className="App-image" alt="logo" width="200" /><br/><b>Ivo Clemente</b> <br/>Busca uma máquina de estampar camiseta<br/>Mais ... </td>
              </tr></table>

	      <br/>
              <hr color="#1768AC" style={{ borderRadius: "40px", width: 300 }} />
	      <h2>Tool4U - Conectando empreendedores</h2>
              <p> Uma plataforma para empreendedores feito por empreendedores</p> 

		<br/>
		<Link to="/cadastro">Criar conta</Link>
		<br/>
		<br/>
		<Link to="/login">Entrar na plataforma</Link>
		<br/>
		<Link to="/busca">Busca avançada</Link>
                <br/>

      </main>
    </div>
  );
}

export default Home;
