// src/components/MyNav.js
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTheme } from './ThemeContext'; // Importa il contesto del tema

const MyNav = ({ searchTerm, onSearchChange }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar className="navbar-custom" variant="dark" expand="lg">
      <Navbar.Brand className='m-4' href="/">MyBookStore</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
        <Form inline className="ml-auto">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </Form>
        <Button variant="outline-light" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
