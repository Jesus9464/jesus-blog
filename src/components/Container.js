import React from "react";
import "./style/Container.css";

import Facebook from "./images/facebook.png";
import Linkedin from "./images/linkedin.png";
import Github from "./images/github.png";
import Twitter from "./images/twitter.png";

function Container() {
  return (
    <div className="contenedor">
      <div className="container__hero">
        <div className="container__hero_barra"></div>
        <div></div>
      </div>
      <div className="hero__contenedor">
        <h2>PROYECTOS</h2>
        <div className="hero__contenedor_hero">
          <h3>Insuagro Limitada</h3>
          <a href="https://jesus9464.github.io/Insumos/" target="_blanck">
            Click para observar Pagina
          </a>
          <p>Sugerencia de diseño a la pagina de la empresa Insuagro</p>
        </div>
        <div className="hero__contenedor_hero">
          <h3>Juego De Memoria</h3>
          <a href="https://jesus9464.github.io/Memoria/" target="_blanck">
            Click para observar Pagina
          </a>
          <p>Juego que desafia su memoria hecho con Javascript, HTML y CSS</p>
        </div>
        <div className="hero__contenedor_hero">
          <h3>Lista De Tareas</h3>
          <a href="https://jesus9464.github.io/tareas/" target="_blanck">
            Click para observar Pagina
          </a>
          <p>
            Lista de tareas utilizando Local Storage, HTML, CSS y Javascript
          </p>
        </div>
        <div className="hero__contenedor_hero">
          <h3>Twitmmer</h3>
          <a href="https://jesus9464.github.io/twitmmer/" target="_blanck">
            Click para observar Pagina
          </a>
          <p>
            Replica de la pagina mas conocida como Twitter hecha con HTML y CSS
          </p>
        </div>
        <div className="hero__contenedor_hero">
          <h3>Sapiensa</h3>
          <a href="https://jesus9464.github.io/sapiensa/" target="_blanck">
            Click para observar Pagina
          </a>
          <p>
            Pagina hecha con HTML y CSS, utilizando animaciones de una libreria
            que se llama animate
          </p>
        </div>
        <div className="hero__contenedor_estudio">
          <h2>EDUCACIÓN</h2>
          <p>
            Escuela Frontend de Platzi <br />
            Tecnologo en Gestion Administrativa -SENA
          </p>
        </div>
        <div className="hero__contenedor_referencias">
          <h2>REFERENCIAS</h2>
          <p>
            Leonardo Fabio Oteca Medina +57 321 751 7551 <br />
            Mercedes Galvis Gualy +57 313 204 4032
          </p>
        </div>
      </div>
      <div className="footer">
        <div></div>
        <div className="container__hero_barra-abajo">
          <a href="https://www.facebook.com/chuchogalviz/" target="_blank">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href="https://twitter.com/JESUSALFONSOG19" target="_blank">
            <img src={Twitter} alt="facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/jesus-alfonso-galvis-gualy-9820b3197/"
            target="_blank"
          >
            <img src={Linkedin} alt="facebook" />
          </a>
          <a href="https://github.com/Jesus9464" target="_blank">
            <img src={Github} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Container;
