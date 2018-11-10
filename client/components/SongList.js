import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { fetchSongs as query, deleteSong as mutation } from '../queries';
//alias for fetchSongs and deleteSong

class SongList extends Component {
  render() {
    const { songs, loading } = this.props.data;
    //see if song is loading if so display loading
    //if songs loaded map songs to client view
    return loading ? (
      <div>Loading</div>
    ) : (
      <div>
        <ul className="collection">
          {songs.map(song => (
            <li key={song.id} className="collection-item">
              {song.title}
            </li>
          ))}
        </ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

//similar to connect in react-redux
//puts query result inside of props

//ewwww line below
export default graphql(query)(SongList);
//executes query query and component are bonded

//steps to use query with react component
//indentify data required
//write query in Graphiql and in component file
//bond query and component
//access data
