// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from './Components/ThemeContext'; // Assumendo che tu abbia un contesto per il tema
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import About from './Components/About';
import NotFound from './Components/NotFound';
import BookDetails from './Components/BookDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.css';
import romance from './Components/Data/romance.json'; //il json si trova qui!
/*./ parti dalla mia posizione */
/*../ vuol dire che devi salire di un livello */
import CommentArea from './Components/CommentArea'
import CommentList from './Components/CommentList'


//TODO lunghezza card tutte uguali 
//TODO Bordo rosso al click 
//TODO test
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <ThemeProvider>
      <Router>
        <MyAppContent searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      </Router>
    </ThemeProvider>
  );
};

const MyAppContent = ({ searchTerm, onSearchChange }) => {
  const { theme } = useTheme(); // Usa il tema dal contesto

  return (
    <div className={theme === 'light' ? 'theme-light' : 'theme-dark'}>
      <MyNav searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <Welcome/>
      <Routes>
        <Route path="/" element={<AllTheBooks searchTerm={searchTerm} books={romance} />} />
        <Route path="/about" element={<About />} />
        <Route path="/book/:asin" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MyFooter />
    </div>
  );
};

export default App;
