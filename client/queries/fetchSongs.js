import gql from 'graphql-tag';

//gets titles and ids of all songs for list view
export default gql`
  {
    songs {
      id
      title
    }
  }
`;
