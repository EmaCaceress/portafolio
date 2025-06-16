import React from 'react';
import './AboutMe.css'; // Importamos el archivo CSS
import logo from '../../assets/images/messi.png'; // Importa la imagen
import wave from '../../assets/images/wave.png'; // Importa la imagen
import cv from '../../assets/document/Emanuel Chacon CV.pdf'
import { saveAs } from 'file-saver';
import Cloud from './Cloud/Cloud';
import Wave from '../Wave/Wave';

const AboutMe = () => {

    const handleDownload = () => {
        // URL del PDF
        const pdfUrl = cv;
        
        // Usamos la función saveAs para descargar el archivo
        saveAs(pdfUrl, 'Curriculum Vitae Emanuel Chacon.pdf');
      };
    
    return (
        <div className="about-container" id="about-container">
            <div className="about-container__clouds">
                <Cloud iconClass="fab fa-react" top="5.6vh" left="7.8vw" />
                <Cloud iconClass="fa-solid fa-database" top="13.9vh" left="17.2vw" color="#ecd104" />
                <Cloud iconClass="fab fa-node-js" top="8.3vh" left="28.1vw" color="#3c873a" />
                <Cloud iconClass="fa-brands fa-docker" top="19.4vh" left="39.1vw" color="#2965f1" />
                <Cloud iconClass="fab fa-sass" top="8.1vh" left="46vw" color="#cd6799" />
            </div>
            <div className="about-container__left-half">
                <div className="about-container__left-half-content">
                    <h2> Soy <span>Emanuel</span> Chacon</h2>
                    <p>
                        Soy un apasionado de la tecnología y el desarrollo web. Me encanta aprender
                        nuevas herramientas y mejorar mis habilidades constantemente. He trabajado con
                        diversas tecnologías, como React, Node.js y CSS. Mi objetivo es crear experiencias
                        digitales útiles y atractivas que resuelvan problemas reales.
                    </p>
                    <input onClick={handleDownload} type="text" value="Descargar CV" />
                </div>
            </div>
            <div className="about-container__right-half">
                <div className="about-container__image-container">
                    <div className="about-container__image-container-content">
                        <img src={logo} alt="Emanuel Chacon" />
                    </div>
                </div>
            </div>
            <Wave wave={wave}></Wave>
        </div>
    );
}

export default AboutMe;
