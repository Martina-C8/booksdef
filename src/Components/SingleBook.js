import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import CommentArea from './CommentArea';

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  const handleCoverClick = () => {
    setSelected(!selected);
  };

  return (
    <Col sm={12} md={4} lg={3} className="mb-4">
      <Card className={selected ? 'selected' : ''}>
        <Card.Img 
          variant="top" 
          src={book.img} 
          onClick={handleCoverClick} 
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          {selected && <CommentArea bookId={book.asin} />}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
