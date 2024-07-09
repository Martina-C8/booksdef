import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddComment = ({ addComment }) => {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ comment, rate });
    setComment('');
    setRate(1);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Commento</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Valutazione</Form.Label>
        <Form.Control
          as="select"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          required
        >
          {[1, 2, 3, 4, 5].map((rate) => (
            <option key={rate}>{rate}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button type="submit">Aggiungi Recensione</Button>
    </Form>
  );
};

export default AddComment;
