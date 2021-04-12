import React from "react";
import { Spacer } from "../../components";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import GET_POKEMON_DETAIL from "../../graphql/getDetailPokemon";
import { Color } from "../../utils/Color";
// import { toUpperCase } from "../../utils/upperCase";

var typesColor = "#52D3B6";
var bgColor = "#BEEFE4";
const PokemonCard = (props) => {
  // console.log(typeof props.data.name);
  const { data } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: props.data.name },
  });

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
      <Link
        to={{
          pathname: `/detail/${data?.pokemon?.id}-${data?.pokemon?.name}`,
          state: {
            image: props.data.image,
            data,
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
            {toUpperCase(data?.pokemon?.name)}
          </h1>
          <Spacer />
          <div>
            <img
              src={props?.data?.image}
              alt={data?.pokemon?.name}
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
            {data?.pokemon?.types?.map((type, idx) => (
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
    </div>
  );
};

export default PokemonCard;
