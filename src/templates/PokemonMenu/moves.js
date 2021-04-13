import React from "react";

const PokemonMoves = (props) => {
  // console.log(props, 'moves')
  return (
    <div>
      {props?.moves?.map((move, idx) => (
        <div key={idx} >
          <p>
            {move?.move?.name}
            {idx < props?.moves?.length - 1 ? ",\u00A0" : ""}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PokemonMoves;
