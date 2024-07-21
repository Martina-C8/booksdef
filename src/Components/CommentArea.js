import React, { useState, useEffect } from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';
//TODO PASSA PARAMENTRI TIPO COME HAI FATTO CON GIAMPI 
const CommentArea = ({ bookId, commenti }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchComments = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${bookId.asin}/comments/`, {
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY3M2VmOTdmNmI0YjAwMTU0MjhmYmQiLCJpYXQiOjE3MjEyMzE5NzIsImV4cCI6MTcyMjQ0MTU3Mn0.G-XrmsQ38Ji53kez5fb6mDOmiLdfBzAjFqnS5dH6k3U"
        }
      });
      console.log(response)
      if (response.ok) {
        let data = await response.json();
        // console.log();
        setComments(data);
        setLoading(false);
      } else {
        setError('Errore nel recupero delle recensioni');
        setLoading(false);
      }
    } catch (error) {
      setError('Errore di rete');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [bookId]);

  const addComment = async (comment) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY3M2VmOTdmNmI0YjAwMTU0MjhmYmQiLCJpYXQiOjE3MjA1NTQ0MzMsImV4cCI6MTcyMTc2NDAzM30.cpdgn1U2k9b4cqxMGr9zF8ZMJLCO5vxap_1LfvHnWNM"
        },
        body: JSON.stringify({ ...comment, elementId: bookId.asin })
      });
      console.log(response)
      if (response.ok) {
        let newComment = await response.json();
        setComments([...comments, newComment]);
      } else {
        setError('Errore nell\'aggiunta della recensione');
      }
    } catch (error) {
      setError('Errore di rete');
    }
  };

  const deleteComment = async (commentId) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY3M2VmOTdmNmI0YjAwMTU0MjhmYmQiLCJpYXQiOjE3MjA1NTQ0MzMsImV4cCI6MTcyMTc2NDAzM30.cpdgn1U2k9b4cqxMGr9zF8ZMJLCO5vxap_1LfvHnWNM"
        }
      });
      if (response.ok) {
        setComments(comments.filter(comment => comment._id !== commentId));
      } else {
        setError('Errore nella cancellazione della recensione');
      }
    } catch (error) {
      setError('Errore di rete');
    }
  };

  const updateComment = async (commentId, updatedComment) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY3M2VmOTdmNmI0YjAwMTU0MjhmYmQiLCJpYXQiOjE3MjA1NTQ0MzMsImV4cCI6MTcyMTc2NDAzM30.cpdgn1U2k9b4cqxMGr9zF8ZMJLCO5vxap_1LfvHnWNM"
        },
        body: JSON.stringify(updatedComment)
      });
      if (response.ok) {
        let updatedCommentResponse = await response.json();
        setComments(comments.map(comment => 
          comment._id === commentId ? updatedCommentResponse : comment
        ));
      } else {
        setError('Errore nell\'aggiornamento della recensione');
      }
    } catch (error) {
      setError('Errore di rete');
    }
  };

  return (
    <>
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      <CommentList comments={comments} deleteComment={deleteComment} updateComment={updateComment} />
      {commenti === "si"? 
      <AddComment addComment={addComment} /> : false} 


    </>
  );
};

export default CommentArea;
