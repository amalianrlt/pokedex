import React from "react";

const PokemonMoves = (props) => {
  // console.log(props, 'moves')
  return (
    <div>
      {props?.moves?.map((move, idx) => (
        <div key={idx} style={{ display: "flex", flexDirection: "row" }}>
          <p>{move?.move?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonMoves;
