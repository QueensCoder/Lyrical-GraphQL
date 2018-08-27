import gql from 'graphql-tag';

//ID! means that this info is required to run query
export default gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        content
      }
    }
  }
`;
