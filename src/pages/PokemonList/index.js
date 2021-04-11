import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import GET_POKEMONS from "../../graphql/getAllPokemons";
import { PokemonCard, PokemonOwnedCard, Header } from "../../templates";
import { Spacer, Pagination } from "../../components";
import {Color} from "../../utils/Color";

// var Color = [
//   "#BEEFE4",
//   "#C9C9EF",
//   "#FFB0AC",
//   "#FFEE8E",
//   "#C7E5A2",
//   "#FBD4B6",
//   "#E6E6F1",
// ];

const PokemonList = () => {
  // console.log(Color);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: offset },
  });

  const nextPage = (e) => {
    e.preventDefault();
    setOffset((old) => old + 20);
    setPage((old) => old + 1);
  };
  const prevPage = (e) => {
    e.preventDefault();
    setOffset((old) => old - 20);
    setPage((old) => old - 1);
  };

  // console.log(pokemons);
  return (
    <div
      style={{
        width: "375px",
        backgroundColor: Color.lightGrey,
        marginLeft: "auto",
        marginRight: "auto",
        // minHeight: "100vh",
        padding: '0 15px 15px 15px',
      }}
    >
      <Header title={'Pokemon List'} />
      <PokemonOwnedCard />
      <Spacer size={20} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 4px",
        }}
      >
        <h3>List of pokemons ({pokemons.count})</h3>
      </div>
      <Spacer size={10} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {pokemons &&
          pokemons?.results?.map((pokemon, idx) => (
            <PokemonCard width={"30%"} data={pokemon} key={idx} />
          ))}
      </div>
      <Pagination
        prev={(e) => prevPage(e)}
        next={(e) => nextPage(e)}
        page={page}
      />
    </div>
  );
};

export default PokemonList;
