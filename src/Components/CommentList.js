import React from 'react';
import SingleComment from './SingleComment';

const CommentList = ({ comments, deleteComment, updateComment }) => {
  return (
    <div>
      {comments.map((comment) => (
        <SingleComment 
          key={comment._id} 
          comment={comment} 
          deleteComment={deleteComment}
          updateComment={updateComment}
        />
      ))}
    </div>
  );
};

export default CommentList;
