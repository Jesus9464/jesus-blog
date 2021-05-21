import React from "react";
import "./style/Header.css";
import image from "./images/jesus.png";
import Telefono from "./images/telefono1.png";
import Gmail from "./images/gmail.png";

function Header() {
  return (
    <div className="header">
      <div className="header__hero-container">
        <h1 className="title-header">JESUS GALVIS</h1>
        <h3 className="title-header-segundo">Web Developer</h3>
        <figure className="header__image-container">
          <img className="image_principal" src={image} alt="Imagen de jesus" />
        </figure>
      </div>
      <div className="hero__container">
        <h2>ACERCA DE MI:</h2>
        <p className="hero__parrafo">
          Soy estudiante activo de la plataforma Platzi, en la escuela de{" "}
          <strong>Desarrollo web como frontend Developer</strong> y egresado del
          del Sena con un tecnólogo en Gestión Administrativa, con amplia
          experiencia en el manejo de aplicaciones ofimáticas, nivel intermedio
          de Excel, Acces, Word, Power Point, e instalaciones de sistemas
          operativos de Windows o Ubuntu, desarrollador de páginas web en
          diversas plataformas tecnológicas y base de datos complejas en Excel.
          Con mi preparación académica y mi formación laboral en diferentes
          empresas ejerciendo el cargo como Coordinador de bodega y jefe de
          inventarios aplicando mis conocimientos en diferentes cargos
          operativos, administrativos y en el campo de desarrollo web. Soy una
          persona comprometida, responsable e innovadora, enfocado en aprender
          día a día y apasionado a la tecnología.
        </p>
        <div className="hero__contacto">
          <h2>CONTACTO</h2>
          <div className="hero__contacto-content">
            <img src={Telefono} alt="telefono" />
            <h3>+57 310 299 0898</h3>
          </div>
          <div className="hero__contacto-content">
            <img className="contact-image" src={Gmail} alt="gmail" />
            <h3>jagalvis69@gmail.com</h3>
          </div>
        </div>
        <div className="container_footer">
          <h2>HABILIDADES</h2>
          <ul>
            <li>Javascript</li>
            <li>Html</li>
            <li>Css</li>
            <li>Github</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
