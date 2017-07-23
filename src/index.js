import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import _ from "lodash";

import { NavBar } from './components/navbar';
import { SearchPosts } from './components/search-posts';
import PostList from './components/post-list';
import { PostForm } from './components/post-form';
import { CommentList } from './components/comment-list';
import { Comment } from './components/comment';

class App extends Component {
    constructor() {
    super();

    this.state = {
      postList: [],
      formMounted: false
    };
  }

  onChangeFormMounted() {
    this.setState({
      formMounted: !this.state.formMounted
    });
  }

  onChangeFormList(item) {
    let newList = Object.assign([], this.state.postList);
    newList.push(item);
    this.setState({postList: newList});
    console.log(this.state.postList);
  }

  render() {

    let formComponent = "";
    if(this.state.formMounted) {
      formComponent = <PostForm
                        changeFormList={ this.onChangeFormList.bind(this) }/>
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
        <PostList postListParent={ this.state.postList } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('appRoot'));
