import React, { Component } from 'react';

export class PostForm extends Component {

  render() {

    return (
      <div className="cred-post-form right-align">

        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Title" id="post-title" type="text" className="validate"/>
            <label className="active" for="post-title">Title</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Author" id="first_name" type="text" className="validate"/>
            <label className="active" for="first_name">Author</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Content" id="post-content" type="text" className="validate"/>
            <label className="active" for="post_content">Body</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input placeholder="image-url" id="image-url" type="text" className="validate"/>
            <label className="active" for="image-url">Image URL</label>
          </div>
        </div>

        <button type="submit">Create Post</button>
      </div>
    );
  }
}
