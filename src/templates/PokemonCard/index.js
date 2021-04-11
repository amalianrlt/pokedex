import React from "react";
import { Spacer } from "../../components";
import { Link } from "react-router-dom";

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
      <Link
        to={{
          pathname: `/detail/${props?.data?.id}-${props?.data?.name}`,
          state: props.data,
        }}
      >
        <div>
          <h1 style={{ fontSize: "14px" }}>{props?.data?.name}</h1>
          <Spacer />
          <div>
            <img
              src={props?.data?.image}
              alt={props?.data?.name}
              width="70"
              height="70"
            />
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
                padding: "3px 5px",
                margin: "0 2px",
              }}
            >
              <p style={{ fontSize: "9px" }}>Grass</p>
            </div>
            <div
              style={{
                backgroundColor: "#22D3B6",
                borderRadius: 5,
                padding: "3px 5px",
                margin: "0 5px",
              }}
            >
              <p style={{ fontSize: "9px" }}>Potion</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
