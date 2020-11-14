import React from 'react';
import { Link } from "react-router-dom";

export default class Admin extends React.Component {
  render() {
    return (<div>
      <main>
        <div>
          <h1>LINGER</h1>
          <h2>ADMINISTRAÇÃO DA PLATAFORMA</h2>
        </div>

        <br />

        <img
          src="https://raw.githubusercontent.com/Megahack-LINGER/docs/main/imagens/logo-tool4u1.png"
          className="App-image"
          alt="logo"
          width="300"
        />

        <hr color="#1768AC" style={{ borderRadius: "40px", width: 80 }} />

        <div>
          <h1>Acesso restrito</h1>
          <p>Administração e Gerenciamento da plataforma.</p>
        </div>

	      <h1>Área do usuário</h1>
	      <strong>Opções</strong>
	      <br />
	      <Link to="/dashboard">Painel Geral do usuário</Link>
	      <br />
	      <Link to="/registro">Registro de Equipamentos</Link>
	      <br />
	      <Link to="/checkout">Checkout de empréstimo</Link>
	      <br />
	      <Link to="/devolucao">Devolução o equipamento</Link>
	      <br />


        <hr color="#1768AC" style={{ borderRadius: "40px", width: 260 }} />

        <div>
          <h1>Sobre Nós</h1>
          <p>Ivo - Business</p>
          <p>José - Marketing</p>
          <p>Leonardo - Engenharia</p>
          <p>Nicolas - Designer</p>
          <p>Ramon - Developer</p>
        </div>
      </main>
    </div>)
  }
}
