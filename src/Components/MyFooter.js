// src/components/MyFooter.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <footer className="footer-custom">
      <Container>
        <Row>
          <Col className='text-center'>
            <p>&copy; {new Date().getFullYear()} Bookstore di Martina - progettino epicode.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
