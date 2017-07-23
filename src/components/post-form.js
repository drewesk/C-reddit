import React, { Component } from 'react';

export class PostForm extends Component {

  constructor(props) {
  super();
    this.state = {
      title: '',
      author: '',
      body: '',
      imageUrl: ''
    };
  }

  onHandleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
    console.log(this.state)
  }

  onSubmitForm() {
    let newItem = this.state;
    this.props.changeFormList(newItem);
  }

  render() {

    return (
      <div className="cred-post-form right-align">

        <div className="row">
          <div className="input-field col s6">
            <input
              className="validate"
              placeholder="title"
              name="title"
              type="text"
              onChange={(event) => this.onHandleInputChange(event) }/>
            <label className="active" for="post-title">Title</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input
              className="validate"
              placeholder="author"
              name="author"
              type="text"
              onChange={(event) => this.onHandleInputChange(event) }/>
            <label className="active" for="author">Author</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input
              className="validate"
              placeholder="Body goes here"
              name="body"
              type="text"
              onChange={(event) => this.onHandleInputChange(event) }/>
            <label className="active" for="body">Body</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input
              className="validate"
              placeholder="URL to image"
              name="imageUrl"
              type="text"
              onChange={(event) => this.onHandleInputChange(event) }/>
            <label className="active" for="imageUrl">Image URL</label>
          </div>
        </div>

        <button onClick={ this.onSubmitForm.bind(this) }>Create Post</button>
      </div>
    );
  }
}
