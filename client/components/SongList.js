import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { fetchSongs as query, deleteSong as mutation } from '../queries';
//alias for fetchSongs and deleteSong

class SongList extends Component {
  async onSongDelete(id) {
    try {
      //do not need to store what is being awaited since next operation happens after
      await this.props.mutate({
        variables: { id }
      });
      return this.props.data.refetch();
    } catch (err) {
      console.log(err);
    }

    //gql knows that this query already exists
    //so we get off the refetch
  }

  render() {
    return (
      !this.props.data.loading && (
        <div>
          <ul className="collection">
            {this.props.data.songs.map(song => {
              const { id, title } = song;
              return (
                <li key={id} className="collection-item">
                  {title}
                  <i
                    className="material-icons"
                    onClick={() => this.onSongDelete(id)}
                  >
                    delete
                  </i>
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

//ewwww line below
export default graphql(mutation)(graphql(query)(SongList));
//executes query query and component are bonded

//steps to use query with react component
//indentify data required
//write query in Graphiql and in component file
//bond query and component
//access data
