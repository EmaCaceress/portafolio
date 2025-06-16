import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './Contact.css';

const Contact = () => {
  const redes = [
    {
      id: 1,
      icono: "https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF",
      link: "https://www.linkedin.com/in/emanuel-chacon/",
      empresa: "linkedin",
    },
    {
      id: 2,
      icono: "https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF",
      link: "https://github.com/EmaCaceress",
      empresa: "github",
    },
    {
      id: 3,
      icono: "https://img.icons8.com/?size=100&id=60688&format=png&color=FFFFFF",
      link: "mailto:emanuelchacon1@outlook.com",
      empresa: "correo",
    }
  ];

    const [rotated, setRotated] = useState(false);

    const handleClick = () => {
      setRotated(true);
      setTimeout(() => setRotated(false), 900);
    };
    

  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">👋 ¡Dime Hola!</h2>
      <div className="contact__info">

        <div class="contact__description">
          <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3MbiS14T_NHfYEsao59b11vW_i0-hqPp4Aw&s'
          alt="Foto de Emanuel"
          className={`contact__description--pic ${rotated ? "rotate" : ""}`}
          onClick={handleClick}
          />
          <p>Si quieres conectarte conmigo o saber más sobre mi trabajo, puedes encontrarme en las siguientes plataformas:</p>
        </div>
        
        <div className="contact__social-links">
          {
            redes.map((obj) => {
              return (
                <a 
                  href={obj.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact__social-link" 
                  key={obj.empresa}
                >
                  <img 
                    src={obj.icono} 
                    alt={obj.empresa} 
                    className="contact__social-icon" 
                  />
                  <p className="contact__social-text" >{obj.link}</p>
                </a>
              );
            })
          }
        </div>
      </div>
      <p className="contact__closing">Agradezco tu tiempo y quedo atento a cualquier mensaje.</p>
    </section>
  );
};

export default Contact;
