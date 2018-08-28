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

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(evt) {
    this.setState({ title: evt.target.value });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    try {
      await this.props.mutate({
        variables: {
          title: this.state.title //take value of input and use for mutation
        },
        refetchQueries: [{ query }] //need to refetch after mutation
      });
      this.setState({ title: '' });
      return hashHistory.push('/songs');
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <Link to="/songs">Go Back</Link>
        <h3>Create a New Song!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Song Title:</label>
          <input
            onChange={this.onChange}
            value={this.state.title}
            type="text"
            name="title"
            placeholder="Enter Title"
          />
        </form>
      </div>
    );
  }
}

export default graphql(createSong)(CreateSong);

//three ways to bind methods for react
//1 in constructor
//2 bind inside of the onchange or onsubmit
//  write arrow function inside of onChange etc
