import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getOneSong } from '../queries';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    console.log(song, 'SONG');
    if (!song) return <div>Loading...</div>;

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <div>
          <LyricList lyrics={song.lyrics} />
        </div>
        <div>
          <LyricCreate />
        </div>
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
