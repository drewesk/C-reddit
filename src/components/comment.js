import React, { Component } from 'react';

export class Comment extends Component {

  render() {

    return (
      <div className="cred-comment">
        <p>{ this.props.commentElements }</p>
      </div>
    );
  }
}
