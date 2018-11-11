import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getOneSong } from '../queries';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    return <div>some detail</div>;
  }
}

export default SongDetail;

//need to take query variables and pass to query
//for specific queries
//react router passes id down to props
//gql has access to props
//takes id off of props and passes params.id to variables for query
