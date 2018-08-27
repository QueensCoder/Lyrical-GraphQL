import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getOneSong } from '../queries';

class SongDetail extends Component {
  render() {
    return (
      <div>
        <h1>Song info</h1>
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
