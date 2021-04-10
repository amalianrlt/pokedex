import React from "react";
import { useQuery } from "@apollo/react-hooks";
import GET_POKEMONS from "../../graphql/getAllPokemons";
import { PokemonCard } from "../../templates";

const PokemonList = () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });

  console.log(pokemons);
  return (
    <div
      style={{
        width: "375px",
        backgroundColor: "teal",
        marginLeft: "auto",
        marginRight: "auto",
        // minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 15,
        justifyContent: "space-between",
      }}
    >
      <PokemonCard width={"23%"} />
      <PokemonCard width={"23%"} />
      <PokemonCard width={"23%"} />
      <PokemonCard width={"23%"} />
      <PokemonCard width={"23%"} />
      <PokemonCard width={"23%"} />
    </div>
  );
};

export default PokemonList;
