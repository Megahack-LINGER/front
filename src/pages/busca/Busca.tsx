import React, { useEffect, useState } from 'react'
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import './Busca.css';

import api from '../../services/api';

import mapMarkerImg from '../../assets/images/map-marker.svg'

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

export default function Contato() {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  return (

    <div id="page-map">
      <div>
        <h1>Busca</h1>
      </div>

      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um equipamento no mapa</h2>

          <p>Alguém precisa de uma ferramenta {':)'}</p>
        </header>

        <header>
          <strong>Cidades atendidas</strong>
          <br/>
          <span>São Paulo</span>
          <br/>
 	  <span>Rio de Janeiro</span>
          <br/>
          <span>Rio Grande do Sul</span>
          <br/>
          <span>Santa Catarina</span>
          <br/>

        </header>
      </aside>
      <hr/>

      <div>
        {orphanages.map(orphanage => (
              <div className="map-orphanage" >
              <strong>{orphanage.name}</strong>
	      <br/>
              <span>{orphanage.name}</span>
              <br/>
              <Link to={`/orphanages/${orphanage.id}`} >
                <FiArrowRight size={20} color="#fff" />
              </Link>
              </div>
        ))}
      </div>

      <Link to="/orphanage/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>

  );
}
