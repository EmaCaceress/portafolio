// GlobalContext.js
import React, { createContext, useState } from 'react';

// Crear un contexto
export const GlobalContext = createContext();

// Proveedor del contexto
export const GlobalProvider = ({ children }) => {
  const [globalValue, setGlobalValue] = useState("flex");

  return (
    <GlobalContext.Provider value={{ globalValue, setGlobalValue }}>
      {children}
    </GlobalContext.Provider>
  );
};