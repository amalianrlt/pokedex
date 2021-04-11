import gql from "graphql-tag";

const GET_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      status
      weight
      height
      base_experience
      location_area_encounters
      order
      species {
        url
        name
      }
      sprites {
        front_default
      }
      abilities {
        ability {
          name
        }
      }
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export default GET_POKEMON_DETAIL;
