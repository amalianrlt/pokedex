import React from "react";
import { Spacer } from "../../components";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import GET_POKEMON_DETAIL from "../../graphql/getDetailPokemon";
import { Color } from "../../utils/Color";
import Lottie from "react-lottie";
import pikacu from "../../assets/animations/pikachu.json";
import { toUpperCase } from "../../utils/upperCase";

const PokemonCard = (props) => {
  const { data, loading } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: props.data.name },
  });

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
        backgroundColor: props?.bgCardColor?.value,
        width: props.width ?? "140px",
        margin: "4px",
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      
      {!loading ? (
        <Link
          to={{
            pathname: `/detail/${data?.pokemon?.id}-${data?.pokemon?.name}`,
            state: {
              image: props.data.image,
              data,
              name: props.data.name,
              bgCardColor: props?.bgCardColor?.value,
              typeColor: props?.typeColor?.value,
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
            <div style={{textAlign:'center'}}>
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
                    backgroundColor: props?.typeColor?.value,
                    borderRadius: 5,
                    padding: "3px 5px",
                    margin: "0 2px",
                  }}
                >
                  <p style={{ fontSize: "9px", color: Color.black }}>
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

export default PokemonCard;
