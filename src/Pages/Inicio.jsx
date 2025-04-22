import React from "react";
import "../App.css";
import imagemBeatriz1 from '../assets/CONVITE-00237.jpg';

import Banner from "../Componets/Banner/Banner";
import Agenda from "../Componets/Agenda/Agenda";



function Inicio() {
  return (
    <>
      <Banner />
      <div className="pagina-inicio">
        <div className="texto">
          <h1>Bem-vindo <br /> Sou a Doutora Beatriz Vilela</h1>
          <p>
            Cuidar de você é minha prioridade. Aqui, promovemos o bem-estar físico, mental e emocional com dedicação,
            empatia e excelência. Descubra um novo jeito de viver com mais saúde e equilíbrio.
          </p>
        </div>
        <div className="imagem">
          <img src={imagemBeatriz1} alt="Doutora Beatriz" />
        </div>
      </div>
     
      <Agenda />
    </>
  );
}

export default Inicio;
