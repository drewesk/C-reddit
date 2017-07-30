import React, { Component } from 'react';

import { Post } from './post';

export class PostList extends Component {
    constructor(props) {
      super();
      this.state = {
      }
    }

    render() {
      let ListItems = this.props.listInit.map((item, i) => {
        return (
          <li key={i} className="post-items-populate">
             <Post postList={ this.state.postListInit[i] }
                   upVote={ this.props.UpVotePost.bind(this) }
                   downVote={ this.props.downVotePost.bind(this) }
                   elements={ item }
                   position={ i } />
          </li>
        );
      });

    return (
      <div className="post-list-items">
        <ul>
          { ListItems }
        </ul>
      </div>
    );
  }
}
