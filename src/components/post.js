/*
SudoCode:Thinking from the perspective of a rendered component

I want to be created from a form
I want to not yet be apart of a DB
I want to have an author under the hood stored as an attribute in myself
I want to utilize emojis and icons
I want to display an image
I want to have a title
I want to be liked and disliked(envied)
I want to allow people to comment on me
I want to allow people to edit/delete comments
I want to have a 'time-stamp' showing elapsed time from when I was created
I want to be sorted by votes, keywords, and latest

I want to be well styled with custom CSS classes

*/

import React, {Component} from 'react';

export class Post extends Component {


  constructor(props) {
    super();

    this.state = {
      votes: 3,
      title: 'Hello',
      body: 'asdfghjkl',
      author: 'Kevin Bacon',
      imageURL: 'https://s-media-cache-ak0.pinimg.com/736x/c7/b6/12/c7b6126fba8bbcfbd804544d0cdc69b6--ocean-waves-oceans.jpg'
    }
  }

  render() {


    return (
      <div className="cred-post">
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src={ this.state.imageURL } height="200" width="150"/>
            </div>
            <div className="card-stacked">
              <h2>{ this.state.title } | { this.state.votes }</h2>
              <p>{ this.state.author }</p>
              <div className="card-content">
                <p>{ this.state.body }</p>
              </div>
              <div className="card-action">
                <span>time-elapsed</span> | <a href="#">Comment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
