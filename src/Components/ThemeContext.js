import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext(); // Creazione del contesto per il tema

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Stato iniziale del tema

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeContext;
