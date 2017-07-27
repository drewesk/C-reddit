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
      postList: [{
        title: 'Art',
        author: 'Sarah',
        body: 'Anything is art, if the collecter believes you.',
        imageUrl: 'https://payload.cargocollective.com/1/1/37421/708557/One_liner.jpg',
        votes: 5
      },
      {
        title: 'Food',
        author: 'Jacob',
        body: 'I like Eggs...',
        imageUrl: 'https://barilla.azureedge.net/~/media/images/en_us/hero-images/spaghetti_v2.png',
        votes: 7
      },
      {
        title: 'Home Town',
        author: 'RandomBot',
        body: 'Sea-Town, because it rains all of the time......',
        imageUrl: 'http://www.pnwphotos.com/gallery/data/526/medium/467774422_7ZtNd-X3.jpg',
        votes: 3
      }],
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

  onSetVotes(newVotes, pos) {

    let selectedItems = this.state.postList.map((post, i) => {
      if(pos == i) {
        post.votes = newVotes;
      }
      return post;
    })

    this.setState({ postList: selectedItems });
  }

  onFilterVotes() {
    const newList = (votes) => {
        return function(post, nextPost) {
            return nextPost[votes] > post[votes];
        }
    }

    const voteListResult = this.state.postList.sort(newList('votes'));

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
                        postListEdit={ this.state.postList } />
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
        <PostList voteInit={ this.state.postList }
                  votes={ this.onSetVotes.bind(this) }
                  postListParent={ this.state.postRender.length == 0 ? this.state.postList : this.state.postRender } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('appRoot'));
