import React from "react";
import { Spacer } from "../../components";
import { Color } from "../../utils/Color";

const PokemonInfo = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          borderBottom: `1px solid ${Color.lightGrey2}`,
          padding: "10px 0",
        }}
      >
        <p>Species</p>
        <Spacer size={10} />
        <p>{props?.pokemon?.species?.name}</p>
      </div>
      <div
        style={{
          borderBottom: `1px solid ${Color.lightGrey2}`,
          padding: "10px 0",
        }}
      >
        <p>Weight</p>
        <Spacer size={10} />
        <p>{props?.pokemon?.weight}</p>
      </div>
      <div
        style={{
          borderBottom: `1px solid ${Color.lightGrey2}`,
          padding: "10px 0",
        }}
      >
        <p>Height</p>
        <Spacer size={10} />
        <p>{props?.pokemon?.height}</p>
      </div>
      <div
        style={{
          borderBottom: `1px solid ${Color.lightGrey2}`,
          padding: "10px 0",
        }}
      >
        <p>Abilities</p>
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
