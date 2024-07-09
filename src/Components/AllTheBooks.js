import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';

const AllTheBooks = ({ searchTerm, books }) => {
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Row>
        {filteredBooks.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
