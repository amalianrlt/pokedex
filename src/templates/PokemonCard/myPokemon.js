import React, { useState } from "react";
import { Spacer } from "../../components";
import { Color } from "../../utils/Color";
import Lottie from "react-lottie";
import pikacu from "../../assets/animations/pikachu.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toUpperCase } from "../../utils/upperCase";

var typesColor = "#52D3B6";
var bgColor = "#BEEFE4";
const MyPokemonCard = (props) => {
  const [loading] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pikacu,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: props.width ?? "100px",
        margin: "4px",
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading && props.data ? (
        <div
          style={{
            padding: 15,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "14px",
              color: Color.black,
              textAlign: "center",
            }}
          >
            {toUpperCase(props.data?.name)}
          </h1>
          {/* <Spacer /> */}
          <div>
            <img
              src={props?.data?.species?.url}
              alt={props.data?.name}
              width="70"
              height="70"
            />
          </div>
          {/* <Spacer /> */}
          <h1
            style={{
              fontSize: "12px",
              color: Color.black,
              textAlign: "center",
              fontWeight: 300,
            }}
          >
            {toUpperCase(props.data?.species?.pokemonName)}
          </h1>
          <Spacer size={5} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {props.data?.types?.map((type, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: typesColor,
                  borderRadius: 5,
                  padding: "3px 5px",
                  margin: "0 2px",
                }}
              >
                <p style={{ fontSize: "9px" }}>
                  {toUpperCase(type?.type?.name)}
                </p>
              </div>
            ))}
          </div>
          <Spacer />
          <div onClick={props.deletePokemon} style={{cursor:'pointer'}}>
            <FontAwesomeIcon icon={faTrash} color={"#E82424"} />
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            minHeight: "130px",
          }}
        >
          <Lottie options={defaultOptions} height={50} width={50} />
        </div>
      )}
    </div>
  );
};

export default MyPokemonCard;
