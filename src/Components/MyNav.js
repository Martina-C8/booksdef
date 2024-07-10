import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useTheme } from './ThemeContext'; // Importa il custom hook per il tema

const MyNav = ({ searchTerm, onSearchChange }) => {
  const { theme, toggleTheme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme(); // Cambia il tema da light a dark e viceversa
  };

  const handleSearchInputChange = (event) => {
    onSearchChange(event.target.value); // Aggiorna il valore del searchTerm
  };

  return (
    <Navbar bg={theme === 'light' ? 'light' : 'dark'} variant={theme === 'light' ? 'light' : 'dark'} expand="lg">
      <Navbar.Brand href="#home">Libreria</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#browse">Browse</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
      <Button variant="outline-light" onClick={handleToggleTheme}>
        Toggle Theme
      </Button>
    </Navbar>
  );
};

export default MyNav;
