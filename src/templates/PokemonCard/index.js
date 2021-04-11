import React from "react";
import { Spacer } from "../../components";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import GET_POKEMON_DETAIL from "../../graphql/getDetailPokemon";

const PokemonCard = (props) => {
  // console.log(typeof props.data.name);
  const { data } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: props.data.name },
  });

  // console.log(data, "check");

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
        margin: "4px",
        // height: 200,
      }}
    >
      <Link
        to={{
          pathname: `/detail/${data?.pokemon?.id}-${data?.pokemon?.name}`,
          state: {image: props.data.image, data},
        }}
      >
        <div>
          <h1 style={{ fontSize: "14px" }}>{data?.pokemon?.name}</h1>
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
                  backgroundColor: "#52D3B6",
                  borderRadius: 5,
                  padding: "3px 5px",
                  margin: "0 2px",
                }}
              >
                <p style={{ fontSize: "9px" }}>{type?.type?.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
