import React, { useState, useEffect } from 'react';
import './Loading.css';
import logo from '../../assets/images/carga.png'; // Importa la imagen
import wave from '../../assets/images/wave2.png'; // Importa la imagen

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga (por ejemplo, esperando 7 segundos)
    setTimeout(() => {
      setIsLoading(false); // Después de 7 segundos, cambiamos el estado a false
    }, 7000);
  }, []);

  return (
    <div>
      {/* Pantalla de carga */}
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-screen__circle">
            <img src={logo} alt="Logo" /> 
            <div className="loading-screen__wave">
              <div className="loading-screen__wave-container">
                <img src={wave} alt="Wave" className="loading-screen__wave-image" />
                <img src={wave} alt="Wave" className="loading-screen__wave-image" />
                <img src={wave} alt="Wave" className="loading-screen__wave-image" />
              </div>
              <div className="loading-screen__wave-box" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
