import React, { Component } from 'react';

export class SearchPosts extends Component {

  render() {

    return (
      <div className="cred-search-posts">

        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Filter" id="search-posts" type="text" className="validate"/>
            <label className="active" htmlFor="search-posts">Seach Posts</label>
          </div>
        </div>

      </div>
    );
  }
}
