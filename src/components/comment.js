import React, { Component } from 'react';

export class Comment extends Component {

  render() {

    return (
      <div className="cred-comment">
        <p>
          <i className="tiny material-icons">ac_unit</i> { this.props.commentElements }
        </p>
      </div>
    );
  }
}
