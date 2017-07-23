import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { NavBar } from './components/navbar';
import PostList from './components/post-list';
import { PostForm } from './components/post-form';

class App extends Component {
    constructor(prop) {
    super();

    this.state = {
      postList: [],
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
    this.setState({postList: newList, formMounted: false});
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
        <PostList postListParent={ this.state.postList } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('appRoot'));
