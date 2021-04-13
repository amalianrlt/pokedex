import React from "react";
import { Spacer } from "../../components";
import { Color } from "../../utils/Color";

const PokemonInfo = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          borderBottom: `1px solid ${Color.grey}`,
          padding: "10px 0",
        }}
      >
        <p style={{ fontSize: 14 }}>Species</p>
        <Spacer size={10} />
        <p>{props?.pokemon?.species?.name}</p>
      </div>
      <div
        style={{
          borderBottom: `1px solid ${Color.grey}`,
          padding: "10px 0",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width:"50%" }}>
          <p style={{ fontSize: 14 }}>Weight</p>
          <Spacer size={10} />
          <p>{props?.pokemon?.weight}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width:"50%" }}>
          <p style={{ fontSize: 14 }}>Height</p>
          <Spacer size={10} />
          <p>{props?.pokemon?.height}</p>
        </div>
      </div>
      <div
        style={{
          borderBottom: `1px solid ${Color.grey}`,
          padding: "10px 0",
        }}
      >
        <p style={{ fontSize: 14 }}>Abilities</p>
        <Spacer size={10} />
        <div style={{ flexDirection: "row", display: "flex" }}>
          {props?.pokemon?.abilities?.map((ability, idx) => (
            <p key={idx}>
              {ability.ability.name}
              {idx < props?.pokemon?.abilities?.length - 1 ? ",\u00A0" : ""}
            </p>
          ))}
        </div>
      </div>
      <Spacer />
    </div>
  );
};

export default PokemonInfo;
