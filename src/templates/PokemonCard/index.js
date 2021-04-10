import React from "react";
import { Spacer } from "../../components";

var img =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";

const PokemonCard = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#BEEFE4",
        width: props.width ?? "100px",
        padding: 15,
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "3px",
        // height: 200,
      }}
    >
      <h1 style={{ fontSize: "14px" }}>Bulbasaur</h1>
      <Spacer />
      <div>
        <img src={img} alt="Bulbasaur" width="60" height="60" />
      </div>
      <Spacer />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#52D3B6",
            borderRadius: 5,
            padding: '3px 5px',
            margin: "0 2px",
          }}
        >
          <p style={{ fontSize: "9px" }}>Grass</p>
        </div>
        <div
          style={{
            backgroundColor: "#22D3B6",
            borderRadius: 5,
            padding: '3px 5px',
            margin: "0 5px",
          }}
        >
          <p style={{ fontSize: "9px" }}>Potion</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
