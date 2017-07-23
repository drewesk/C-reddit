import React from 'react';
import Post from './post';

const PostList = (props) => {
  if(props.postListParent) {
    const postItems = props.postListParent.map((item, i) => {
      return (
        <Post
          key={i}
          title={ item.title }
          author={ item.author }
          body={ item.body }
          imageUrl={ item.imageUrl }
        />
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
}

export default PostList;
