import React from "react";

const PokemonBaseStats = (props) => {
  // console.log(props.stats);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {props.stats?.map((stat, idx) => (
        <div key={idx}>
          <p>{stat.stat.name}</p>
          <div style={{ backgroundColor: "salmon", height: 10, width: "100%" }}>
            <div
              style={{ backgroundColor: "teal", height: 10, width: `${stat.base_stat}%`}}
            />
          </div>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <p>0</p>
            <p>100</p>
          </div>
        </div>
      ))}
      {/* <div>
        {props.stats?.map((stat, idx) => (
          <div key={idx}>
            <p>{stat.stat.name}</p>
            <p>{stat.base_stat}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default PokemonBaseStats;
