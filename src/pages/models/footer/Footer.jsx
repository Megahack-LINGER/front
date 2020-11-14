import React from 'react';

import qrcode from "../../../assets/images/qrcode.svg"

import "./Footer.css"

export default function Footer() {
  return <footer>
    <h1>Mega Hack 5.0 - Desafio Inovativa</h1>
    <h3>Portal de dúvidas</h3>
    <p>Email: <i>linger@gmail.com</i> | Whatsapp: <i>11 99898-9197</i></p>
    <span>Baixe o nosso App aqui</span>
    <img src={qrcode} width="100vw" />
  </footer>
}
