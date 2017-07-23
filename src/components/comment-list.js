import React from 'react';
import { Comment } from './comment';

const CommentList = (props) => {
  const commentItems = props.commentListParent.map((item, i) => {
    return (
      <li key={i + 50} className="comment-items-populate">
         <Comment commentElements={ item }/>
      </li>

    );
  });

  return (
    <div className="comment-list-items">
        { commentItems }
    </div>
  );
}

export default CommentList;
