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
    for (const key in this.state) {
      if (this.state[key] === '') {
       alert('invalid input, can\'t be empty');
       return false;
      }
    }
    let newItem = this.state;
    this.props.changeFormList(newItem);
  }

  render() {

    return (
      <div className="cred-post-form">

        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="title"
              name="title"
              type="text"
              onChange={(event) => this.onHandleInputChange(event) }/>
            <label className="active"
                   htmlFor="post-title">Title</label>
          </div>

          <div className="input-field col s6">
            <input
              placeholder="author"
              name="author"
              type="text"
              onChange={(event) => this.onHandleInputChange(event) }/>
            <label className="active"
                   htmlFor="author">Author</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Body goes here"
              name="body"
              type="text"
              onChange={(event) => this.onHandleInputChange(event) }/>
            <label className="active"
                   htmlFor="body">Body</label>
          </div>

          <div className="input-field col s6">
            <input
              placeholder="URL to image"
              name="imageUrl"
              type="text"
              onChange={(event) => this.onHandleInputChange(event) }/>
            <label className="active"
                   htmlFor="imageUrl">Image URL</label>
          </div>
        </div>

        <a className="btn-floating btn-large waves-effect waves-light red"
           onClick={ this.onSubmitForm.bind(this) }>
           <i className="material-icons">add</i>
         </a>

      </div>
    );
  }
}
