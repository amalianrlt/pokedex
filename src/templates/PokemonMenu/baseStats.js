import React from "react";
import { Color } from "../../utils/Color";

const PokemonBaseStats = (props) => {
  // console.log(props.stats);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {props.stats?.map((stat, idx) => (
        <div key={idx} style={{ marginBottom: 10 }}>
          <p>{stat.stat.name}</p>
          <div
            style={{
              backgroundColor: Color.grey,
              height: 15,
              width: "100%",
              borderRadius: 8,
            }}
          >
            <div
              style={{
                backgroundColor: "teal",
                height: 15,
                width: `${stat.base_stat}%`,
                borderRadius: 8,
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  color: Color.white,
                  textAlign: "center",
                }}
              >
                {stat.base_stat}
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: 10 }}>0</p>
            <p style={{ fontSize: 10 }}>100</p>
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
