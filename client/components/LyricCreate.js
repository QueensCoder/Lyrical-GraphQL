import React, { Component } from 'react';
import { createLyric } from '../queries';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    //how to access mutation
    try {
      await this.props.mutate({
        variables: {
          content: this.state.content,
          songId: this.props.songId
          //passed in song id from SongDetail
          //now have access to id from params.match
        }
      });

      this.setState({ content: '' });
    } catch (err) {
      console.log(err);
    }
  }

  clickHandle() {
    console.log('hi i got clicked');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="content">Add a Lyric</label>
          <input
            name="content"
            type="text"
            value={this.state.content}
            onChange={evt => this.setState({ content: evt.target.value })}
            required
          />
        </form>
      </div>
    );
  }
}

export default graphql(createLyric)(LyricCreate);

//get id from song using query params from props
//use that id to make a query to find song then add lyric to the song
//re render page then upload changes to song
//mutation used --- addLyrics
