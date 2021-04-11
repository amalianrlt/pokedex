import React from "react";

const PokemonEvolution = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "40%" }}>
        <p>Species</p>
        <p>Height</p>
        <p>Weight</p>
        <p>Abilities</p>
      </div>
      <div style={{ width: "60%" }}>
        <p>{props.pokemon.species.name}</p>
        <p>{props.pokemon.height}</p>
        <p>{props.pokemon.weight}</p>
        <div style={{ flexDirection: "row", display: "flex" }}>
          {props.pokemon.abilities.map((ability, idx) => (
            <p key={idx}>
              {ability.ability.name}
              {idx < props.pokemon.abilities.length - 1 ? ",\u00A0" : ""}
            </p>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default PokemonEvolution;
