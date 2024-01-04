import React, { createContext, useContext, useState } from "react";

const ButtonStateContext = createContext();

export const ButtonStateProvider = ({ children }) => {
  const [etatBouton, setEtatBouton] = useState("Data Mocked");

  const toggleOnOff = () => {
    setEtatBouton((prevState) => (prevState === "API" ? "Data Mocked" : "API"));
    console.log('Le bouton est à l\'état :', etatBouton);
  };

  return (
    <ButtonStateContext.Provider value={{ etatBouton, toggleOnOff }}>
      {children}
    </ButtonStateContext.Provider>
  );
};

export const useButtonState = () => {
  const context = useContext(ButtonStateContext);
  if (!context) {
    throw new Error("useButtonState must be used within a ButtonStateProvider");
  }
  return context;
};
