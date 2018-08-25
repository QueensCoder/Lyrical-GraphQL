import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { fetchSongs as query, deleteSong as mutation } from '../queries';
//alias for fetchSongs and deleteSong

class SongList extends Component {
  render() {
    return (
      !this.props.data.loading && (
        <div>
          <ul className="collection">
            {this.props.data.songs.map(song => {
              return (
                <li key={song.id} className="collection-item">
                  {song.title}
                </li>
              );
            })}
          </ul>
          <Link to="songs/create" className="btn-floating btn-large red right">
            <i className="material-icons">add</i>
          </Link>
        </div>
      )
    );
  }
}

//similar to connect in react-redux
//puts query result inside of props

export default graphql(mutation)(graphql(query)(SongList));
//executes query query and component are bonded

//steps to use query with react component
//indentify data required
//write query in Graphiql and in component file
//bond query and component
//access data
