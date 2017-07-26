import React, { Component } from 'react';

export class NavBar extends Component {

  render() {

    return (
      <div className="cred-navbar">
        <nav>
          <div className="nav-wrapper #ff6e40 deep-orange accent-2">
            <span className="brand-logo">
              <i className="material-icons">tag_faces</i>
              !Reddit
            </span>
          </div>
        </nav>

      </div>
    );
  }
}
