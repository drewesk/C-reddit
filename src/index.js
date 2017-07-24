import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

import { NavBar } from './components/navbar';
import { SearchBar } from './components/search-bar';
import PostList from './components/post-list';
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

  onChangeFormList(item) {
    let newList = Object.assign([], this.state.postList);
    newList.push(item);
    this.setState({ postList: newList, formMounted: false});
    this.setState({ postRender: newList });
  }

  postSearch(keyword) {
    let newList = [];
    this.state.postList.map((post, i) => {
      if(post.title.toLowerCase().includes(keyword.toLowerCase())) {
        newList.push(post);
      }
    });
    if(keyword) {
      this.setState({ postRender: newList });
    } else {
      this.setState({ postRender: this.state.postList });
    }
    console.log(this.state.postRender);
  }

  render() {

    const postSearch = _.debounce((keyword) => {
      this.postSearch(keyword)
    }, 300);

    let formComponent = "";
    if(this.state.formMounted) {
      formComponent = <PostForm
                        changeFormList={ this.onChangeFormList.bind(this) }/>
    }

    return(

      <div className="app-root">
        <NavBar />
        <SearchBar onSearchTerm={ postSearch } />
        <div className="right-align">
          <button className="form-component-button btn-large waves-effect waves-light red"
                  onClick={ this.onChangeFormMounted.bind(this) }>
            <i className="tiny material-icons">tab_unselected</i>
              <span> New Post</span>
          </button>
          <div className='form-component-mounted'>
            { formComponent }
          </div>
        </div>
        <PostList postListParent={ this.state.postRender } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('appRoot'));
