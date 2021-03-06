import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

//import '../styles/pages/home.css';

//import logoImg from '../images/logo.svg';
import logo from '../logo.svg';
import image1 from '../imagens/maquina-laser.jpg';
import image2 from '../imagens/maquina-sublimacao.jpg';
import image3 from '../imagens/sublimacao.jpg';

function Contato() {
  return (

    <div className="App">

      <br/>
      <br/>
      <br/>

      <header className="App-topo" >

          <h2>Encontre a ferramenta que precisa</h2>
          <p>Produza e faça networking</p>
      </header>
      <main>
          <h1>CONTATO</h1>
          <h1>TOOL4U</h1>
          <p>Uma plataforma de uso colaborativo de ferramentas e máquinas.</p>
          <br/> 
          <img src={image1} className="App-image" alt="logo" />
          <img src={image2} className="App-image" alt="logo" />
          <img src={image3} className="App-image" alt="logo" />
          <p>
            MEGA HACK 5.0
          </p>
          <hr/>

          <h1>MAIS INFORMAÇÕES</h1>
          <a
          className="App-link"
          href="/contato"
          rel="noopener noreferrer"
          >
          Entrem em contato com o time TOOL4U
          </a>
          <div>
          <Link to="/contato" className="enter-app">
           <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </Link>
          </div>
      </main>
      <footer className="App-rodape" >
          <h1>Projeto Sebrae</h1>
          <p>Mega Hack 5.0</p>
      </footer>

      <header className="App-header">
          <p>
            MEGA HACK 5.0 - Projeto Sebrae
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            LINGER 2020 - Todos os direitos reservados
          </p>

      </header>

    </div>
  );
}

export default Contato;

