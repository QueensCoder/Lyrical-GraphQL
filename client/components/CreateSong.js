import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
// import query from '../queries/fetchSongs';
import { fetchSongs as query } from '../queries';
//gql prevents from queries to be run of the same time

class CreateSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
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
    //why is bind not inside of constructor, causes error when bind is used in constructor
    return (
      <div>
        <Link to="/songs">Go Back</Link>
        <h3>Create a New Song!</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            onChange={this.onChange.bind(this)}
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

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
      id
    }
  }
`;

export default graphql(mutation)(CreateSong);
