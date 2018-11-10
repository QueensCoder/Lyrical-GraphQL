import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
// import query from '../queries/fetchSongs';
import { fetchSongs as query, createSong } from '../queries';
//gql prevents from queries to be run of the same time

class CreateSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    //have to bind methods to context of this
  }

  async onSubmit(evt) {
    evt.preventDefault();
    try {
      await this.props.mutate({
        variables: {
          title: this.state.title
        }
      });
      this.setState({ title: '' });
      hashHistory.push('/');
      //wait for new song to be added then clear form
      //then routes user to the song list
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song!</h3>
        <form onSubmit={this.onSubmit}>
          <label>Song Title:</label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
            type="text"
            required
          />
        </form>
      </div>
    );
  }
}

export default graphql(createSong)(CreateSong);

//connecting a mutation gives us
//props.mutate

//three ways to bind methods for react
//1 in constructor
//2 bind inside of the onchange or onsubmit
//  write arrow function inside of onChange etc
