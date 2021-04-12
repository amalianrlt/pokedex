import React, { useState } from "react";
import { Spacer } from "../../components";
import {
  Header,
  PokemonInfo,
  PokemonMoves,
  PokemonBaseStats,
} from "../../templates";
import { toUpperCase } from "../../utils/upperCase";
import { Color } from "../../utils/Color";

const PokemonDetail = (props) => {
  const catchPokemon = () => {
    const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
        count
        next
        previous
        status
        message
        results {
          url
          name
          image
        }
      }
    }`;

    const gqlVariables = {
      limit: 2,
      offset: 1,
    };

    fetch("https://graphql-pokeapi.vercel.app/api/graphql", {
      credentials: "omit",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: gqlQuery,
        variables: gqlVariables,
      }),
      method: "POST",
    })
      .then((res) => console.log(res.json()))
      .then((res) => console.log("Response from server", res));
  };

  const [menu, setMenu] = useState({
    info: true,
    move: false,
    baseStats: false,
  });

  return (
    <div
      style={{
        width: "375px",
        backgroundColor: props.location.state.bgColor,
        marginLeft: "auto",
        marginRight: "auto",
        minHeight: "100vh",
      }}
    >
      <Header
        catchPokemon={catchPokemon}
        hasBack={true}
        title={"Detail"}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          padding: "20px 20px 0 20px",
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
            <h2>{`#${props.location.state.data?.pokemon?.order}`}</h2>
            <Spacer />
            <h3>{toUpperCase(props.location.state.name)}</h3>
            <Spacer size={5} />
            <div style={{ flexDirection: "row", display: "flex" }}>
              {props.location.state.data?.pokemon?.types?.map((type, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: props.location.state.typesColor,
                    borderRadius: 5,
                    padding: "3px 5px",
                    margin: "0 2px",
                  }}
                >
                  <p style={{ fontSize: "12px" }}>
                    {toUpperCase(type.type.name)}
                  </p>
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
          <div
            style={{
              cursor: "pointer",
              padding: "3px 15px",
              borderRadius: 15,
            }}
            onClick={() =>
              setMenu({
                info: true,
                move: false,
                baseStats: false,
              })
            }
          >
            <h5
              style={{
                color: menu.info
                  ? props.location.state.typesColor
                  : Color.black,
              }}
            >
              Info
            </h5>
          </div>
          <div
            style={{
              cursor: "pointer",
              padding: "3px 15px",
              borderRadius: 15,
            }}
            onClick={() =>
              setMenu({
                info: false,
                move: true,
                baseStats: false,
              })
            }
          >
            <h5
              style={{
                color: menu.move
                  ? props.location.state.typesColor
                  : Color.black,
              }}
            >
              Move
            </h5>
          </div>
          <div
            style={{
              cursor: "pointer",
              padding: "3px 15px",
              borderRadius: 15,
            }}
            onClick={() =>
              setMenu({
                info: false,
                move: false,
                baseStats: true,
              })
            }
          >
            <h5
              style={{
                color: menu.baseStats
                  ? props.location.state.typesColor
                  : Color.black,
              }}
            >
              Base State
            </h5>
          </div>
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
        {menu.info && (
          <PokemonInfo pokemon={props.location.state.data?.pokemon} />
        )}
        {menu.move && (
          <PokemonMoves moves={props.location.state.data?.pokemon?.moves} />
        )}
        {menu.baseStats && (
          <PokemonBaseStats stats={props.location.state.data?.pokemon?.stats} />
        )}
      </div>
    </div>
  );
};

export default PokemonDetail;
