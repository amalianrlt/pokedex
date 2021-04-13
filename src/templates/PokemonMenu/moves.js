import React from "react";

const PokemonMoves = (props) => {
  return (
    <div style={{display:"flex", flexWrap:'wrap', flexDirection:'row' }} >
      {props?.moves?.map((move, idx) => (
        <div key={idx} style={{margin:3, backgroundColor: props?.color, padding:"3px 10px", borderRadius:5}} >
          <p>
            {move?.move?.name}
            {/* {idx < props?.moves?.length - 1 ? ",\u00A0" : ""} */}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PokemonMoves;
