import React from 'react';

export default class About extends React.Component {
  render() {
    return (<div>
      <main>
        <img
          src="https://raw.githubusercontent.com/Megahack-LINGER/docs/main/imagens/Banners.jpg"
          className="App-image"
          alt="logo"
          width="100%"
        />
        <div>
          <h1>LINGER</h1>
          <h2>Apresenta</h2>
        </div>

        <br />

        <img
          src="https://raw.githubusercontent.com/Megahack-LINGER/docs/main/imagens/tool4u.png"
          className="App-image"
          alt="logo"
          width="300"
        />

        <p>A plataforma para compartilhamento e uso colaborativo de ferramentas e máquinas.</p>
        <hr color="#1768AC" style={{ borderRadius: "40px", width: 300 }} />
        <h1>Ofereça e encontre</h1>
        <p>Ofereça uma ferramenta que está ociosa aqui</p>
        <p>Encontre a ferramenta que precisa</p>
        <div>
          <header>
            <p>Produza e faça networking</p>
          </header>
        </div>

        <hr color="#1768AC" style={{ borderRadius: "40px", width: 150 }} />

        <div>
          <h1>Quem Somos</h1>
          <p>Uma startup inovadora que ajuda empreededores.</p>
        </div>

        <hr color="#1768AC" style={{ borderRadius: "40px", width: 300 }} />
        <h1>O que Fazemos?</h1>

        <p>
          Conectamos empreendedores que oferecem e buscam máquinas e
          ferramentas.
              </p>

        <hr color="#1768AC" style={{ borderRadius: "40px", width: 80 }} />

        <div>
          <h1>Como Funciona?</h1>
          <p>Encontramos profissionais em busca de máquina para produzir.</p>
          <p>Encontramos profissionais que oferecem equipamentos ociosos.</p>
          <p>Conectamos os empreendedores por localidade.</p>
          <p>Oferecemos uma forma de pagamento segura.</p>
          <p>Garantimos a devolução do equipamento.</p>
        </div>

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
