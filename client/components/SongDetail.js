import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getOneSong } from '../queries';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    return song ? (
      <div>
        <Link to="/">Back</Link>
        <h1>{song.title}</h1>
        <LyricList lyrics={song.lyrics} />
        <hr />
        <LyricCreate songId={this.props.params.id} />
      </div>
    ) : (
      <div>Loading </div>
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

//query variables are done different with queries
//queries are automatic by gql and
//mutations and done by users

//inorder to pass in params.id you have to
// set up an object with a options method that takes props
//and passes that  as the query variable

{
  /* <div>
<ul>
  {song.lyrics.map(({ id, content, likes }) => {
    return <li key={id}>{content}</li>;
  })}
</ul>
</div> */
}
