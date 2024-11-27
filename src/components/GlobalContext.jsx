import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "pt" : "en"));
  };

  return (
    <GlobalContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
};
// Validação das props
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
