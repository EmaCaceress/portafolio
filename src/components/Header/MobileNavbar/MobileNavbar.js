// src/components/MobileNavbar.jsx
import React, { useState } from 'react';
import '../Header.css'; // reutilizamos el mismo archivo de estilos
import { Menu, X } from 'lucide-react'; // Asegúrate de tener esta librería instalada o cambia por SVGs

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-navbar">
      <div className="mobile-navbar__header">
        <a href="#about-container" className="mobile-navbar__logo">EC</a>
        <button onClick={() => setIsOpen(!isOpen)} className="mobile-navbar__toggle">
          {isOpen ? <X size={50} /> : <Menu size={50} />}
        </button>
      </div>

      {isOpen && (
        <ul className="mobile-navbar__menu">
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Proyectos</a></li>
          <li><a href="#certificates" onClick={() => setIsOpen(false)}>Certificados</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a></li>
        </ul>
      )}
    </div>
  );
};

export default MobileNavbar;
