import gql from 'graphql-tag';

//ID! means that this info is required to run query
export default gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
      }
    }
  }
`;
//instead of makig new queries you can enhance previously written queries
