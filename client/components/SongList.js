import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { fetchSongs as query, deleteSong as mutation } from '../queries';
//alias for fetchSongs and deleteSong

class SongList extends Component {
  async deleteSong(id) {
    try {
      await this.props.mutate({ variables: { id } });
      this.props.data.refetch();
    } catch (err) {
      console.log(err);
    }
    //get refetch because it was wired up with
    //get all songs request
  }

  render() {
    //id is used when deleting a song
    const { songs, loading } = this.props.data;
    //see if song is loading if so display loading
    //if songs loaded map songs to client view
    return loading ? (
      <div>Loading</div>
    ) : (
      <div>
        <ul className="collection">
          {songs.map(({ id, title }) => (
            <li key={id} className="collection-item">
              {title}
              <i className="material-icons" onClick={() => this.deleteSong(id)}>
                delete
              </i>
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
export default graphql(mutation)(graphql(query)(SongList));
//executes query query and component are bonded

//steps to use query with react component
//indentify data required
//write query in Graphiql and in component file
//bond query and component
//access data
