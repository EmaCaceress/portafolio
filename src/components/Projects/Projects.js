import React from "react";
import './Projects.css';
import wave from '../../assets/images/wave3.png'; // Importa la imagen
import Wave from "../Wave/Wave";
// Datos de ejemplo (en un proyecto real estos podrían provenir de una API o archivo JSON)
const projects = [
  {
    title: "Ecommerce muebleria",
    issuedBy: "La Sureña S.A es un pagina web de comercializacion para un negocio de la localidad de Berazategui donde se exciben sus productos",
    link: "https://www.google.com/certificado/frontend",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DUUdLGhcb5wa-QYwU3zxFqXO-rY6Xh5-1g&s",
    Imagepreview:"https://media.licdn.com/dms/image/v2/C4D22AQGOprhMxMPp0g/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1663264962062?e=1752105600&v=beta&t=kgy3gR5Qo7CrW-WLtKBGLnQFQ73aEJz2E2jgYJlbUJQ",
    badge:["JS", "SASS"],
  },
  {
    title: "Ecommerce MELI",
    issuedBy: "El proyecto de MELI es una imitacion a grandes rasgos de lo que es la pagina de mercado libre, en este proyecto se trabajo con una API para poder mostrar sus productos",
    link: "https://www.udemy.com/certificado/react",
    Imagepreview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYZsCiBKQxHy2GEYN6XxU9TPXN5-bhlE6zQ&s",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT23rApmx5etQsJS921E7L1p01kSdXPpMAWxA&s",

    badge:["REACT", "SASS", "API REST"],
  },
  { 
    title: "Ecommerce Delivery",
    issuedBy: "Pato escabio es un ecommerce de una tienda de bebidas noctura creada para un familiar donde se cargaron combos y productos desde un backend",
    link: "https://www.coursera.org/certificado/javascript",
    image: "https://instagram.faep6-1.fna.fbcdn.net/v/t51.2885-19/468783147_600370432333397_1392689755834878986_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2AH94G7HfveuTZ1pPIQ2Hu8pwmiHWeCplrBODtVHwNxvL-acF98N8Rg-NE6KzREM_5g&_nc_ohc=GthGVMEZNp4Q7kNvgHjgb4l&_nc_gid=fd9fda0c01b041cea87d7d22634289a4&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYAMczhqF-y-ITVY7x5_aVLFX7LP6fDsZiQ7-JrTHjkOPQ&oe=67C63B42&_nc_sid=7d3ac5",
    badge:["REACT", "SASS", "FIREBASE", "EXPRESS"],
  },
  {
    title: "Calculadora",
    issuedBy: "Es una calculadora intuitiva que te ayuda a hacer calculos matematicos simples :)",
    link: "https://www.coursera.org/certificado/javascript",
    image: "https://via.placeholder.com/150",
    badge:["REACT", "TYPESCRIPT", "DOCKER", "SASS"],
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2>💻 Mis creaciones en acción 🚀</h2>
      <div className="projects-section__container">
        {projects.map((proj, index) => (
          <div key={index} className="projects-section__card">
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
          </div>
        ))}
      </div>
      <Wave wave={wave}></Wave>
    </div>
  );
}

export default Projects;
