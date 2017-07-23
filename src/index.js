import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import _ from "lodash";

import { NavBar } from './components/navbar';
import { SearchPosts } from './components/search-posts';
import { PostList } from './components/post-list';
import { PostForm } from './components/post-form';
import { Post } from './components/post';
import { CommentList } from './components/comment-list';
import { Comment } from './components/comment';

class App extends Component {
    constructor() {
    super();

    this.state = {
      formMounted: false
    };
  }

  onChangeFormMounted() {
    this.setState({
      formMounted: !this.state.formMounted
    });
  }

  render() {

    let formComponent = "";
    if(this.state.formMounted) {
      formComponent = <PostForm />
    }

    return(

      <div className="app-root">
        <NavBar />
        <SearchPosts />
        <div className="right-align">
          <button className="form-component-button btn-floating btn-large waves-effect waves-light red" onClick={ this.onChangeFormMounted.bind(this) }>add post</button>
          <div className='form-component-mounted'>
            { formComponent }
          </div>
        </div>
        {/* <PostList /> */}
        <Post />
        <CommentList />
        <Comment />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('appRoot'));
