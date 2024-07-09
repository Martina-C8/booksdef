import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import AllTheBooks from './Components/AllTheBooks';
import Welcome from './Components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SingleBook.css';
import romance from './Components/Data/romance.json';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <MyNav searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <Welcome />
      <Container>
        <AllTheBooks searchTerm={searchTerm} books={romance} />
      </Container>
      <MyFooter />
    </>
  );
};

export default App;
