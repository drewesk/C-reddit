import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

import { NavBar } from './components/navbar';
import { SearchBar } from './components/search-bar';
import { PostList } from './components/post-list';
import { PostForm } from './components/post-form';

class App extends Component {
    constructor(prop) {
    super();

    this.state = {
      postRender: [],
      postList: [],
      postListResult: [],
      formMounted: false,
    };
  }

  onChangeFormMounted() {
    this.setState({
      formMounted: !this.state.formMounted
    });
  }

  onChangeFormList(item, pos) {

    if(pos) {
      this.state.postList.splice(pos, 1);

      let newList = Object.assign([], this.state.postList);
      newList.push(item);
      this.setState({ postList: newList, formMounted: false});
      this.setState({ postRender: newList });

    } else {

      let newList = Object.assign([], this.state.postList);
      newList.push(item);
      this.setState({ postList: newList, formMounted: false});
      this.setState({ postRender: newList });

    }
  }

  onUpVotePost(pos) {

    let newList = this.state.postList.map((post, i) => {
      if(pos == i){
        post.votes += 1;
      }
      return post;
    });
    this.setState({ postList: newList });
  }

  onDownVotePost(pos) {

    let newList = this.state.postList.map((post, i) => {
      if(pos == i){
        if(post.votes > 0) {
          post.votes -= 1;
        }
      }
      return post;
    });

    this.setState({ postList: newList });
  }

  onFilterVotes() {
    const newList = (votes) => {
        return function(post, nextPost) {
            return nextPost[votes] > post[votes];
        }
    }

    const voteListResult = this.state.postRender.sort(newList('votes'));

    console.log(voteListResult);

    this.setState({ postList: voteListResult });

  }

  postSearch(keyword) {

    let newList = [];
    this.state.postList.map((post, i) => {
      if(post.title.toLowerCase().includes(keyword.toLowerCase())) {
        newList.push(post);
      }

    });

    this.setState({ postRender: newList });
  }

  render() {

    const postSearch = _.debounce((keyword) => {
      this.postSearch(keyword)
    }, 300);

    let formComponent = "";
    if(this.state.formMounted) {
      formComponent = <PostForm
                        changeFormList={ this.onChangeFormList.bind(this) }
                        postListEdit={ this.state.postList }
                        />
    }


    return(
      <div className="app-root">
        <NavBar />
        <SearchBar onSearchTerm={ postSearch } />
        <div className="left-align">
          <button className='btn-large'
                  onClick={ this.onFilterVotes.bind(this) }>filter by votes</button>
        </div>
        <div className="right-align">
          <button className="form-component-button btn-large waves-effect waves-light red"
                  onClick={ this.onChangeFormMounted.bind(this) }>
            <i className="tiny material-icons">tab_unselected</i>
              <span> New/Edit Post</span>
          </button>
          <div className='form-component-mounted'>
            { formComponent }
          </div>
        </div>
        <PostList listInit={ this.state.postList }
                  UpVotePost={ this.onUpVotePost.bind(this) }
                  downVotePost={ this.onDownVotePost.bind(this) }
                  />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('appRoot'));
