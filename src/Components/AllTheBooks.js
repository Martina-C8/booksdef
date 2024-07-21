// src/components/AllTheBooks.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea'


const AllTheBooks = ({ searchTerm, books }) => {
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(books);
    }
  }, [searchTerm, books]);

  return (
    <Container>
      <Row>
      <Col sm={12} md={9} lg={9} className="mb-8">
      <Row>
        {filteredBooks.map(book => (
          <Col key={book.asin} sm={12} md={3} lg={3} className="mb-4">
            {/* <CommentArea book={book} /> */}
            <SingleBook book={book} />
          </Col>
        ))}
          </Row>
        </Col>
        <Col sm={12} md={3} lg={3} className="mb-4">
        {filteredBooks.map(book => (
          <Col key={book.asin} sm={12} md={3} lg={3} className="mb-4">
            <CommentArea bookId={book} commenti= {"no"}/>
          </Col>
        ))}
        </Col>
      </Row>

    </Container>
  );
};

export default AllTheBooks;
