import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import GET_POKEMONS from "../../graphql/getAllPokemons";
import { PokemonCard, HomePageHeader } from "../../templates";
import { Pagination } from "../../components";
import { Color } from "../../utils/Color";
import Lottie from "react-lottie";
import pikacu from "../../assets/animations/pikachu.json";

// var Colors = [
//   "#BEEFE4",
//   "#C9C9EF",
//   "#FFB0AC",
//   "#FFEE8E",
//   "#C7E5A2",
//   "#FBD4B6",
//   "#E6E6F1",
// ];

const PokemonList = () => {
  // console.log(Color);
  const [limit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(true);
  const { data, loading } = useQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: offset },
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pikacu,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const nextPage = (e) => {
    e.preventDefault();
    setOffset((old) => old + 20);
    setPage((old) => old + 1);
  };
  const prevPage = (e) => {
    e.preventDefault();
    setOffset((old) => old - 20);
    setPage((old) => old - 1);
  };

  return (
    <div
      style={{
        width: "375px",
        backgroundColor: "#FAE159",
        marginLeft: "auto",
        marginRight: "auto",
        // minHeight: "100vh",
      }}
    >
      <HomePageHeader />
      <div
        style={{
          padding: "20px 15px",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: Color.lightGrey,
        }}
      >
        {!loading && data ? (
          <>
            {/* <PokemonOwnedCard /> */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 4px",
              }}
            >
              <h4 style={{ fontWeight: 300 }}>
                List of pokemons ({data.pokemons.count})
              </h4>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {data?.pokemons &&
                data?.pokemons?.results?.map((pokemon, idx) => (
                  <PokemonCard width={"31%"} data={pokemon} key={idx} />
                ))}
            </div>
            <Pagination
              prev={(e) => prevPage(e)}
              next={(e) => nextPage(e)}
              page={page}
              total={(data.pokemons.count / limit).toFixed()}
            />
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              minHeight: "78vh",
            }}
          >
            <Lottie options={defaultOptions} height={250} width={250} />
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
