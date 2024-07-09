import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SingleComment = ({ comment, deleteComment, updateComment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedComment, setUpdatedComment] = useState(comment.comment);
  const [updatedRate, setUpdatedRate] = useState(comment.rate);

  const handleDelete = () => {
    deleteComment(comment._id);
  };

  const handleUpdate = () => {
    updateComment(comment._id, { comment: updatedComment, rate: updatedRate });
    setIsEditing(false);
  };

  return (
    <div className="single-comment mb-2">
      {isEditing ? (
        <Form>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={2}
              value={updatedComment}
              onChange={(e) => setUpdatedComment(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="select"
              value={updatedRate}
              onChange={(e) => setUpdatedRate(e.target.value)}
            >
              {[1, 2, 3, 4, 5].map((rate) => (
                <option key={rate}>{rate}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button variant="success" onClick={handleUpdate}>Salva</Button>
        </Form>
      ) : (
        <>
          <p>{comment.comment}</p>
          <p>Valutazione: {comment.rate}</p>
        </>
      )}
      <Button variant="danger" onClick={handleDelete}>Elimina</Button>
      <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>Modifica</Button>
    </div>
  );
};

export default SingleComment;
