// src/components/NotFound.js
import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="mt-5">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </Container>
  );
};

export default NotFound;
