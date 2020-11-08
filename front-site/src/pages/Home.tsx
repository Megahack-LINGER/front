import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

//import '../styles/pages/home.css';

//import logoImg from '../images/logo.svg';
import logo from '../logo.svg';

function Home() {
  return (

    <div className="App">
      <header className="App-topo" >
          <Link to="/" className="enter-app">
           Home          
          </Link>
          <Link to="/contato" className="enter-app">
           Contato
          </Link>

          <h2>Encontre a ferramenta que precisa</h2>
          <p>Produza e faça networking</p>
      </header>
      <main>
          <h1>LINGER apresenta:</h1>
          <p>TOOL4U</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            MEGA HACK 5.0
          </p>
          <a
          className="App-link"
          href="/contato"
          rel="noopener noreferrer"
          >
          Projeto TOOLS
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
      </header>

    </div>
  );
}

export default Home;

