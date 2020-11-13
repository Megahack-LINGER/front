import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./Contato.css";

export default function Contato() {
  return (
    <div>
       <img
          src="https://raw.githubusercontent.com/Megahack-LINGER/docs/main/imagens/BANNER_IMPRESSORA_3D.jpg"
          className="App-image"
          alt="logo"
          width="100%"
        />

      <h1>Contato</h1>
      <p>Mais informações entrem em contato</p>
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
      <Link to="/termos">Termos de uso e regra de garantia</Link>
      <br />
      <Link to="/politica">Política de privacidade</Link>
      <br />
    </div>
  );
}
