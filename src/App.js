import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import AllTheBooks from './Components/AllTheBooks';
import Welcome from './Components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SingleBook.css';
import romance from './Components/Data/romance.json';
import { ThemeProvider, useTheme } from './Components/ThemeContext'; // Importa il provider del tema

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <ThemeProvider>
      <MyAppContent searchTerm={searchTerm} onSearchChange={handleSearchChange} />
    </ThemeProvider>
  );
};

const MyAppContent = ({ searchTerm, onSearchChange }) => {
  const { theme } = useTheme(); // Usa il tema dal contesto

  return (
    <div className={theme === 'light' ? 'theme-light' : 'theme-dark'}>
      <MyNav searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <Welcome />
      <Container>
        <AllTheBooks searchTerm={searchTerm} books={romance} />
      </Container>
      <MyFooter />
    </div>
  );
};

export default App;
