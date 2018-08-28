import React, { Component } from 'react';
import { createLyric } from '../queries';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  }

  handleChange(evt) {
    this.setState({ content: evt.target.value });
  }

  submitHandle(evt) {
    evt.preventDefault();
    console.log(this.props.songId);
    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    });
    this.setState({ content: '' });
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.submitHandle}>
        <label>Add Lyrics</label>
        <input
          onChange={this.handleChange}
          type="text"
          name="content"
          value={this.state.content}
        />
      </form>
    );
  }
}

export default graphql(createLyric)(LyricCreate);

//get id from song using query params from props
//use that id to make a query to find song then add lyric to the song
//re render page then upload changes to song
//mutation used --- addLyrics
