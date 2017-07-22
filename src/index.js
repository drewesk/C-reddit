import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import _ from "lodash";

import { NavBar } from './components/navbar';
import { PostList } from './components/post-list';
import { PostForm } from './components/post-form';
import { Post } from './components/post';
import { CommentList } from './components/comment-list';
import { Comment } from './components/comment';
import { SearchPosts } from './components/search-posts';

class App extends Component {
  render() {
    return(
      <div className="app-root">
        <NavBar />
        <PostList />
        <PostForm />
        <Post />
        <CommentList />
        <Comment />
        <SearchPosts />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('appRoot'));
