import React, { useState } from "react";
import { Spacer } from "../../components";
import { Link } from "react-router-dom";
import { Color } from "../../utils/Color";
import Lottie from "react-lottie";
import pikacu from "../../assets/animations/pikachu.json";
// import { toUpperCase } from "../../utils/upperCase";

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

  // console.log(data, "check");
  function toUpperCase(string) {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
  }

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
        <Link
          to={{
            pathname: `/detail/${props.data?.pokemon?.id}-${props.data?.pokemon?.name}`,
            state: {
              image: props.data.image,
              data: props.data,
              name: props.data.name,
              bgColor: bgColor,
              typesColor: typesColor,
            },
          }}
        >
          <div
            style={{
              padding: 15,
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
            <Spacer />
            <div>
              <img
                src={props?.data?.species?.url}
                alt={props.data?.name}
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
          </div>
        </Link>
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
