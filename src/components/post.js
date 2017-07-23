import React, { Component } from 'react';

import CommentList from './comment-list';

export class Post extends Component {
    constructor(props) {
      super();

      this.state = {
        votes: 0,
        commentsMounted: false,
        comments: [],
      }
    };

    onUpVote() {
      this.setState({
        votes: this.state.votes + 1
      });
    }

    onDownVote() {
      if(this.state.votes > 0) {
        this.setState({
          votes: this.state.votes - 1
        });
      }
    }

    onHandleCommentChange(event) {
      const target = event.target;
      const name = target.name;

      this.setState({
        [name]: target.value
      });
      console.log(this.state)
    }

    onComment(){
      let newItem = this.state.commentText;
      let newList = Object.assign([], this.state.comments);
      newList.push(newItem);
      this.setState({comments: newList});
      console.log(this.state.comments);
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
              className="validate"
              placeholder="... first"
              name="commentText"
              type="text"
              onChange={(event) => this.onHandleCommentChange(event) }/>
              
              <button className="form-component-button btn-medium waves-effect waves-light red"
                      onClick={ this.onComment.bind(this) }>
                <span>Comment</span>
                <i className="small material-icons">filter_list</i>
              </button>
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
                <h2>
                  { this.props.elements.title } | { this.state.votes }
                  <a className='vote-button'
                     onClick={ this.onUpVote.bind(this) }>
                    <i className="medium material-icons">arrow_drop_up</i>
                  </a>
                  <a className='vote-button'
                     onClick={ this.onDownVote.bind(this) }>
                    <i className="medium material-icons">arrow_drop_down</i>
                  </a>
                </h2>
                <div className="card-content">
                  <p className="cred-author">-{ this.props.elements.author }</p>
                  <p>{ this.props.elements.body }</p>
                </div>
                <div className="card-action">

                  <span>time-elapsed</span> | <i className="medium material-icons">chat_bubble_outline</i>

                  <a onClick={ this.onChangeCommentsMounted.bind(this) }>
                    <span>Comments: { this.state.comments.length }</span>
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
