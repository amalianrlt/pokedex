import React, { useState } from "react";
import GET_POKEMON_DETAIL from "../../graphql/getDetailPokemon";
import { useQuery } from "@apollo/react-hooks";
import { Spacer } from "../../components";
import {
  Header,
  PokemonInfo,
  PokemonEvolution,
  PokemonMoves,
  PokemonBaseStats,
} from "../../templates";

const PokemonDetail = (props) => {
  const { data } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: props.location.state.name },
  });

  const [menu, setMenu] = useState({
    info: false,
    evolution: false,
    move: false,
    baseStats: true,
  });

  console.log(data?.pokemon);

  return (
    <div
      style={{
        width: "375px",
        backgroundColor: "salmon",
        marginLeft: "auto",
        marginRight: "auto",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <img
              src={props.location.state.image}
              alt={props.location.state.name}
              width="150"
              height="150"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2>{`#${data?.pokemon?.order}`}</h2>
            <Spacer />
            <h3>{props.location.state.name}</h3>
            <Spacer size={5} />
            <div style={{ flexDirection: "row", display: "flex" }}>
              {data?.pokemon?.types?.map((type, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "#52D3B6",
                    borderRadius: 5,
                    padding: "3px 5px",
                    margin: "0 2px",
                  }}
                >
                  <p style={{ fontSize: "12px" }}>{type.type.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Spacer size={30} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <h5
            style={{ cursor: "pointer" }}
            onClick={() =>
              setMenu({
                info: true,
                evolution: false,
                move: false,
                baseStats: false,
              })
            }
          >
            Info
          </h5>
          <h5
            style={{ cursor: "pointer" }}
            onClick={() =>
              setMenu({
                info: false,
                evolution: true,
                move: false,
                baseStats: false,
              })
            }
          >
            Evolution
          </h5>
          <h5
            style={{ cursor: "pointer" }}
            onClick={() =>
              setMenu({
                info: false,
                evolution: false,
                move: true,
                baseStats: false,
              })
            }
          >
            Move
          </h5>
          <h5
            style={{ cursor: "pointer" }}
            onClick={() =>
              setMenu({
                info: false,
                evolution: false,
                move: false,
                baseStats: true,
              })
            }
          >
            Base State
          </h5>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          minHeight: 200,
          padding: 20,
        }}
      >
        {menu.info && <PokemonInfo pokemon={data?.pokemon} />}
        {menu.evolution && <PokemonEvolution pokemon={data?.pokemon} />}
        {menu.move && <PokemonMoves moves={data?.pokemon?.moves} />}
        {menu.baseStats && <PokemonBaseStats stats={data?.pokemon?.stats} />}
      </div>
    </div>
  );
};

export default PokemonDetail;
