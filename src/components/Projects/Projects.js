import React from "react";
import './Projects.css';
import wave from '../../assets/images/wave3.png'; // Importa la imagen
import sureña from '../../assets/images/sureña.png'; // Importa la imagen
import sureñalogo from '../../assets/images/sureñalogo.jpg'; // Importa la imagen
import meli from '../../assets/images/mercadolibre.png'; // Importa la imagen
import melilogo from '../../assets/images/melilogo.svg'; // Importa la imagen
import lmemlogo from '../../assets/images/lmemlogo.svg'; // Importa la imagen
import lmem from '../../assets/images/lmem.png'; // Importa la imagen

import Wave from "../Wave/Wave";
// Datos de ejemplo (en un proyecto real estos podrían provenir de una API o archivo JSON)
const projects = [
  {
    title: "Ecommerce muebleria",
    issuedBy: "La Sureña es una muebleria ficticia, en este proyecto se desarrollo un ecommerce completo con carrito de compras, gestion de usuarios y productos",
    link: "https://la-surena.vercel.app/",
    image: sureñalogo,
    Imagepreview:sureña,
    badge:["JS", "CSS", "RESPONSIVE DESIGN", "MONGODB", "EXPRESS"],
  },
  {
    title: "Ecommerce MELI",
    issuedBy: "El proyecto de MELI es una imitacion a grandes rasgos de lo que es la pagina de mercado libre, en este proyecto se trabajo con una API para poder mostrar sus productos",
    link: "https://mercadolibre-omega.vercel.app/",
    Imagepreview:meli,
    image: melilogo,
    badge:["REACT", "SASS", "API REST", "DESKTOP", "VITE"],
  },
  { 
    title: "La mente es maravillosa",
    issuedBy: "Es una pagina web informativa sobre la salud mental y el bienestar emocional. Proporciona artículos, consejos y recursos para promover una mente sana.",
    link: "https://la-mente-es-maravillosa.vercel.app/",
    image: lmemlogo,
    Imagepreview:lmem,
    badge:["REACT", "CSS", "RESPONSIVE DESIGN", "COOLABORATIVE PROJECT"],
  },
  {
    title: "MisFinanzas",
    issuedBy: "Esta pagina te ayuda a llevar un control de tus finanzas personales, permitiendote calcular ingresos, gastos y ahorros de manera sencilla y eficiente.",
    link: "https://desktop-finance-calculator.vercel.app/",
    image: "",
    Imagepreview: "",
    badge:["REACT", "VITE", "TYPESCRIPT", "SASS", "DESKTOP", "MONGODB", "NODEJS"],
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
