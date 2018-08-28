import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getOneSong } from '../queries';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  render() {
    console.log(this.props.data.song);

    if (this.props.data.song) {
      const { title, lyrics } = this.props.data.song;
      const { id } = this.props.params;
      //pass id down to lyric create component
      return (
        <div>
          <h1>{title}</h1>
          <ul>
            {!lyrics.length ? (
              <h3>No lyrics</h3>
            ) : (
              lyrics.map(({ content }, i) => {
                return <li key={i}>{content}</li>;
              })
            )}
          </ul>
          <div>
            <LyricCreate songId={id} />
          </div>
          <Link to={'/songs'}>All Songs</Link>
        </div>
      );
    } else
      return (
        <div>
          <h1>Loading Please Wait...</h1>
        </div>
      );
  }
}

export default graphql(getOneSong, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
//need to take query variables and pass to query
//for specific queries
//react router passes id down to props
//gql has access to props
//takes id off of props and passes params.id to variables for query
