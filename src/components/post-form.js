import React, { Component } from 'react';

export class PostForm extends Component {

  constructor(props) {
  super();
    this.state = {
      title: '',
      author: '',
      body: '',
      imageUrl: '',
      votes: 0
    };
  }

  onHandleItemPopulate(event) {
    const numInp = event.target.value;

    const item = this.props.postListEdit[numInp];
    if(item) {
      this.setState({
        pos: numInp,
        title: item.title,
        author: item.author,
        body: item.body,
        imageUrl: item.imageUrl
      });
    }

    console.log(this.state);
  }

  onHandleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  onSubmitForm() {
    let newItem = this.state;
    let pos = this.state.pos;
    let sudoItems = this.state;

    delete sudoItems['pos'];

    for (const key in sudoItems) {
        if (this.state[key] === '') {
         alert('invalid input, can\'t be empty');
         return false;
      }
    }

    if(pos) {
      this.props.changeFormList(newItem, pos)
    } else {
      this.props.changeFormList(newItem);
    }
  }

  onEditPost(item, index){
    this.setState(
      {
        title: item.title,
        author: item.Author,
        body: item.body,
        imageUrl: item.imageUrl
      }
    );
  }

  render() {
    if(this.props.postListEdit.length > 0) {
      this.state.hide = 'post-show';
    } else {
      this.state.hide = 'post-hidden'
    }

    return (
      <div className="cred-post-form">

        <div className="row">
          <div className={this.state.hide}>

          <div className="pos-post">
            <input
              placeholder="pos"
              name="pos"
              type="number"
              onChange={(event) => this.onHandleItemPopulate(event) }/>
            <label className="active"
                   htmlFor="post-pos">pos</label>
          </div><br/><br/>

          </div>


          <div className="input-field col s6">
            <input
              value={ this.state.title }
              placeholder="title"
              name="title"
              type="text"
              onChange={(event) => this.onHandleInputChange(event) }/>
            <label className="active"
                   htmlFor="post-title">Title</label>
          </div>

          <div className="input-field col s6">
            <input
              value={ this.state.author }
              placeholder="author"
              name="author"
              type="text"
              onChange={(event) => this.onHandleInputChange(event) }/>
            <label className="active"
                   htmlFor="author">Author</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input
              value={ this.state.body }
              placeholder="Body goes here"
              name="body"
              type="text"
              onChange={(event) => this.onHandleInputChange(event) }/>
            <label className="active"
                   htmlFor="body">Body</label>
          </div>

          <div className="input-field col s6">
            <input
              value={ this.state.imageUrl }
              placeholder="URL to image"
              name="imageUrl"
              type="text"
              onChange={(event) => this.onHandleInputChange(event) }/>
            <label className="active"
                   htmlFor="imageUrl">Image URL</label>
          </div>
        </div>

        <a className="btn-floating btn-large waves-effect waves-light red"
           onClick={ this.onSubmitForm.bind(this) }>
           <i className="material-icons">add</i>
         </a>

      </div>
    );
  }
}
