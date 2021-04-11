import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import GET_POKEMONS from "../../graphql/getAllPokemons";
import { PokemonCard } from "../../templates";

var Color = [
  "#BEEFE4",
  "#C9C9EF",
  "#FFB0AC",
  "#FFEE8E",
  "#C7E5A2",
  "#FBD4B6",
  "#E6E6F1",
];

const PokemonList = () => {
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: offset },
  });


  // console.log(pokemons?.results?.map((pokemon) => pokemon?.name));Î
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
      {pokemons &&
        pokemons?.results?.map((pokemon, idx) => (
          <PokemonCard
            width={"23%"}
            data={pokemon}
            key={idx}
            bgColor={Color.map((c) => c)}
          />
        ))}
    </div>
  );
};

export default PokemonList;
