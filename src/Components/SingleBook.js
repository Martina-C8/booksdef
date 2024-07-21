// // src/components/SingleBook.js
// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const SingleBook = ({ book }) => {
//   return (
//     <Card className="card-custom">
//       <Card.Img variant="top" src={book.img} />
//       <Card.Body>
//         <Card.Title>{book.title}</Card.Title>
//         <Card.Text>{book.price}</Card.Text>
//         <Link to={`/book/${book.asin}`}>
//           <Button variant="primary">Details</Button>
//         </Link>
//       </Card.Body>
//     </Card>
//   );
// };

// export default SingleBook;
// src/components/SingleBook.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleBook = ({ book }) => {
  return (
    <Card className="card-custom" data-testid="single-book-card">
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.price}</Card.Text>
        <Link to={`/book/${book.asin}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
