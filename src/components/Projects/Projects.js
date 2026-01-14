import React from "react";
import './Projects.css';
import wave from '../../assets/images/wave3.png'; // Importa la imagen
import sureña from '../../assets/images/sureña.png'; // Importa la imagen
import sureñalogo from '../../assets/images/sureñalogo.jpg'; // Importa la imagen
import meli from '../../assets/images/mercadolibre.png'; // Importa la imagen
import melilogo from '../../assets/images/melilogo.svg'; // Importa la imagen

import Wave from "../Wave/Wave";
// Datos de ejemplo (en un proyecto real estos podrían provenir de una API o archivo JSON)
const projects = [
  {
    title: "Ecommerce muebleria",
    issuedBy: "La Sureña S.A es un pagina web de comercializacion para un negocio de la localidad de Berazategui donde se exciben sus productos",
    link: "https://la-surena.vercel.app/",
    image: sureñalogo,
    Imagepreview:sureña,
    badge:["JS", "SASS"],
  },
  {
    title: "Ecommerce MELI",
    issuedBy: "El proyecto de MELI es una imitacion a grandes rasgos de lo que es la pagina de mercado libre, en este proyecto se trabajo con una API para poder mostrar sus productos",
    link: "https://mercadolibre-omega.vercel.app/",
    Imagepreview:meli,
    image: melilogo,
    badge:["REACT", "SASS", "API REST"],
  },
  { 
    title: "Ecommerce Delivery",
    issuedBy: "Pato escabio es un ecommerce de una tienda de bebidas noctura creada para un familiar donde se cargaron combos y productos desde un backend",
    link: "https://www.coursera.org/certificado/javascript",
    image: "",
    badge:["REACT", "SASS", "FIREBASE", "EXPRESS"],
  },
  {
    title: "Calculadora",
    issuedBy: "Es una calculadora intuitiva que te ayuda a hacer calculos matematicos simples :)",
    link: "https://www.coursera.org/certificado/javascript",
    image: "",
    badge:["REACT", "TYPESCRIPT", "DOCKER", "SASS"],
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2>💻 Mis creaciones en acción 🚀</h2>
      <div className="projects-section__container">
        {projects.map((proj, index) => (
          <a key={index} className="projects-section__card" href={proj.link} target="_blank" rel="noopener noreferrer">
            <div className="projects-section__images">
              <img src={proj.image} alt={proj.title} className="projects-section__images__img" />
              <img src={proj.Imagepreview} alt={proj.title} className="projects-section__images__img--preview" />
            </div>
            <div className="projects-section__info">
              <h3 className="projects-section__info-title">{proj.title}</h3>
              <p className="projects-section__info-text">{proj.issuedBy}</p>
              {/* <a href={proj.link} target="_blank" rel="noopener noreferrer" className="projects-section__link">
                Ver más
              </a> */}
              <div className="badges">
              {
                proj.badge.map((bad, index)=>(
                    <span key={index}className="badge">{proj.badge[index]}</span>
              ))}
              </div>  
            </div>
          </a>
        ))}
      </div>
      <Wave wave={wave}></Wave>
    </div>
  );
}

export default Projects;
