import gql from 'graphql-tag';
//accidentally used $id instead of $songID
export default gql`
  mutation AddLyric($songId: ID, $content: String) {
    addLyricToSong(songId: $songId, content: $content) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;
