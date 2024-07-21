// src/components/BookDetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import romance from './Data/romance.json'; // Importa i tuoi dati dei libri
import CommentArea from './CommentArea'
import CommentList from './CommentList'


const BookDetails = () => {
  const { asin } = useParams();
  const book = romance.find(b => b.asin === asin);
  const bookId =  romance.find (b => b.asin === asin)
  const [comments, setComments] = useState(book && book.reviews ? book.reviews : []);
  const [newComment, setNewComment] = useState('');
  const [editingComment, setEditingComment] = useState(null);
  const [editedComment, setEditedComment] = useState('');

  if (!book) {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Book not found</h2>
            <p>We couldn't find the book you're looking for.</p>
          </Col>
        </Row>
      </Container>
    );
  }

  const handleAddComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  const handleEditComment = (index) => {
    setEditingComment(index);
    setEditedComment(comments[index]);
  };

  const handleSaveComment = (index) => {
    const updatedComments = [...comments];
    updatedComments[index] = editedComment;
    setComments(updatedComments);
    setEditingComment(null);
    setEditedComment('');
  };

  const handleDeleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.price}</Card.Text>
              <Card.Text>{book.category}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <h3>Reviews</h3>
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>
                  {editingComment === index ? (
                    <Form>
                      <Form.Group controlId="editComment">
                        <Form.Control
                          type="text"
                          value={editedComment}
                          onChange={(e) => setEditedComment(e.target.value)}
                        />
                      </Form.Group>
                      <Button variant="primary" onClick={() => handleSaveComment(index)}>
                        Save
                      </Button>
                      <Button variant="secondary" onClick={() => setEditingComment(null)}>
                        Cancel
                      </Button>
                    </Form>
                  ) : (
                    <div>
                      {comment}
                      <Button variant="link" onClick={() => handleEditComment(index)}>
                        Edit
                      </Button>
                      <Button variant="link" onClick={() => handleDeleteComment(index)}>
                        Delete
                      </Button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews available.</p>
          )}
          <Form>
            <Form.Group controlId="newComment">
              <Form.Control
                type="text"
                placeholder="Add a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddComment}>
              Add Comment
            </Button>
          </Form>
        </Col>
      </Row>
      <CommentArea bookId={bookId} commenti= {"si"} />
    </Container>
  );
};

export default BookDetails;
