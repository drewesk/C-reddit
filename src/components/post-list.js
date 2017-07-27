import React from 'react';
import { Post } from './post';

const PostList = (props) => {
  const postItems = props.postListParent.map((item, i) => {

    return (
      <li key={i} className="post-items-populate">
         <Post postListInit={ props.voteInit }
               onVotes={ props.votes }
               elements={ item }
               position={ i } />
      </li>
    );
  });

  return (
    <div className="post-list-items">
      <ul>
        { postItems }
      </ul>
    </div>
  );
}

export default PostList;
