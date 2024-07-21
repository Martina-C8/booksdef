// src/components/Welcome.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container className="mt-5">
      <h1>Benvenuti sullo store!</h1>
      <p>Cerca i libri che ti interessano e scopri la recensione a riguardo!</p>
    </Container>
  );
};

export default Welcome;
