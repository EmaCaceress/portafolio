// src/components/MobileNavbar.jsx
import '../Header.css'; // reutilizamos el mismo archivo de estilos

const DesktopNavbar = ({event}) => {
  return (
    <div className="header__container">
    <div onClick={()=> event()} className="header__title">
      <span className="header__title--incomplete">EC</span>
      <span className="header__title--full">Emanuel Chacon</span>
    </div>
    
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item"><a href="#projects" className="header__nav-link">Proyectos</a></li>
        <li className="header__nav-item"><a href="#certificates" className="header__nav-link">Certificados</a></li>
        <li className="header__nav-item"><a href="#contact" className="header__nav-link">Contacto</a></li>
      </ul>
    </nav>
    
  </div>
  );
};

export default DesktopNavbar;