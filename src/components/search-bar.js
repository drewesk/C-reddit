/*

Sudo-Code

I want to access the postList array
then I want to temp map/filter/reduce through
then I want to render the results
then I want the state array to return to what it was

*/
import React, { Component } from 'react';

export class SearchBar extends Component {
  constructor(props){
    super();

    this.state = {
      keyword: ''
    }
  }

  onChangeFilterSearch(keyword){
    this.setState({keyword});
    this.props.onSearchTerm(keyword);
  }

  render() {
    return (
      <input type="text"
        onChange={ (event) => this.onChangeFilterSearch( event.target.value )
        }/>
    );
  }
}
