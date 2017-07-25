import React from 'react';
import { Post } from './post';

const PostList = (props) => {
  const postItems = props.postListParent.map((item, i) => {
    console.log(item);
    return (
      <li key={i} className="post-items-populate">
         <Post elements={item} key={ i }/>
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
