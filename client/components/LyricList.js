import React, { Component } from 'react';
import { likeLyric } from '../queries';
import { graphql } from 'react-apollo';

class LyricList extends Component {
  //use render lyrics method because we are only fetching info for one song ???
  //unlike using restAPI we fetch what we only need
  //optmistic updates assume the update is correct and renders the guess
  //if incorrect it rerenders the wrong info with correct
  onLike(id, likes) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
      //only need to pass in id for this mutation of increasing likes
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i
              className="material-icons"
              onClick={() => this.onLike(id, likes)}
            >
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="collection">{this.renderLyrics()}</ul>
      </div>
    );
  }
}

export default graphql(likeLyric)(LyricList);
