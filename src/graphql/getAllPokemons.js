import gql from "graphql-tag";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      next
      previous
      status
      results {
        url
        name
        image
      }
    }
  }
`;

export default GET_POKEMONS;
