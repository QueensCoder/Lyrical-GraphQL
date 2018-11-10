import gql from 'graphql-tag';

//uses query variables
//takes in a string and creates a song
//then returns title and id of created song

export default gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
      id
    }
  }
`;
