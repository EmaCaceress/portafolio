import "./Header.css";
import React from 'react'; // Importamos React para poder usar JSX
import { useContext } from 'react';
import { GlobalContext } from '../Context/Context';
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";

const Header = () => {
  const { globalValue } = useContext(GlobalContext);

  const onStart = () => {
    window.scrollTo(0, 0);
  }

  return (
    <header className="header" style={{display:`${ globalValue }`}}>
      <DesktopNavbar event={onStart}/>
      <MobileNavbar event={onStart}/>
    </header>
  );
};

export default Header; // Exportamos el componente para usarlo en otras partes del proyecto
