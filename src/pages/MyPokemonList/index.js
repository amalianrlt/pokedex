import React from "react";
import { Header } from "../../templates";

import Lottie from "react-lottie";
import pikacu from "../../assets/animations/pikachu.json";
import { Color } from "../../utils/Color";
import { child } from "../../assets";
import { Spacer } from "../../components";

const MyPokemonList = () => {
  const loading = false;
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
        width: "375px",
        backgroundColor: "#FAE159",
        marginLeft: "auto",
        marginRight: "auto",
        // minHeight: "100vh",
      }}
    >
      <Header title={"My Pokemon"} hasBack={"/"} catchPokemon={true} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={child} width="100" height="100" alt="child" />
        <Spacer />
        <p>My Pokemon (1)</p>
      </div>
      <Spacer />
      <div
        style={{
          padding: "20px 15px",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          minHeight: "65vh",
          backgroundColor: Color.lightGrey,
        }}
      >
        {!loading ? (
          <>
            <p>tes</p>
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

export default MyPokemonList;
