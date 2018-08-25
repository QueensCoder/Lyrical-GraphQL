import gql from 'graphql-tag';

export default gql`
  mutation RemoveSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;
