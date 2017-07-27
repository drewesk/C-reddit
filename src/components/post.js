import React, { Component } from 'react';
import Moment from 'react-moment';

import CommentList from './comment-list';

export class Post extends Component {
    constructor(props) {
      super();

      let Votes = props.postListInit[props.position].votes
      this.state = {
        votes:  Votes,
        commentsMounted: false,
        comments: [],
        dateTimestamp: Date.now()
      }
    };

    onUpVote() {
      this.setState({
        votes: this.state.votes + 1
      });
      this.props.onVotes(this.state.votes, this.props.position);
    }

    onDownVote() {
      if(this.state.votes > 0) {
        this.setState({
          votes: this.state.votes - 1
        });
        this.props.onVotes(this.state.votes, this.props.key);
      }
    }

    onHandleCommentChange(event) {
      const target = event.target;
      const name = target.name;

      this.setState({
        [name]: target.value
      });
    }

    onComment(){
      let newItem = this.state.commentText;
      let newList = Object.assign([], this.state.comments);

      if (newItem == '' || newItem == undefined ||
       newItem == null) {
       alert('invalid input, can\'t be empty');
       return false;
      }

      newList.push(newItem);
      this.setState({comments: newList});
    }

    onChangeCommentsMounted() {
      this.setState({
        commentsMounted: !this.state.commentsMounted
      })
    }

    render() {
    let commentsList = '';

    if(this.state.commentsMounted) {
      commentsList = (
        <div className="comments-mounted-list">
          <CommentList commentListParent={ this.state.comments }/>
            <input
              placeholder="... first"
              name="commentText"
              type="text"
              onChange={(event) => this.onHandleCommentChange(event) }/>

              <a className="btn-floating btn-large waves-effect waves-light"
                      onClick={ this.onComment.bind(this) }>
                <i className="large material-icons">chat</i>
              </a>
        </div>
      );
    }

      return (
        <div className="cred-post">
          <div className="col s12 m7">
            <div className="card horizontal">
              <div className="card-image">
                <img src={ this.props.elements.imageUrl }
                     height="200"
                     width="150"/>
              </div>
              <div className="card-stacked">
                <h4 className="vote-button">
                  { this.props.elements.title } | { this.state.votes } votes
                  <a onClick={ this.onUpVote.bind(this) }>
                    <i className="medium material-icons">arrow_drop_up</i>
                  </a>
                  <a onClick={ this.onDownVote.bind(this) }>
                    <i className="medium material-icons">arrow_drop_down</i>
                  </a>
                </h4>
                <div className="card-content hoverable #b3e5fc light-blue lighten-4">
                  <p className="cred-author">-{ this.props.elements.author }</p>
                  <p>{ this.props.elements.body }</p>
                </div>
                <div className="card-action">

                  <span><Moment fromNow>{ this.state.dateTimestamp }</Moment></span> | <i className="medium material-icons">chat_bubble_outline</i>

                  <a className="btn"
                     onClick={ this.onChangeCommentsMounted.bind(this) }>
                    <span className="#1a237e indigo-text text-darken-4">Comments: { this.state.comments.length }</span>
                  </a>
                  <div className="comments">
                      { commentsList }
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      );
    }
  }
