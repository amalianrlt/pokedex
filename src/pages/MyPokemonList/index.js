import React, { useState, useEffect } from "react";
import { Header, MyPokemonCard } from "../../templates";

import Lottie from "react-lottie";
import pikacu from "../../assets/animations/pikachu.json";
import { Color } from "../../utils/Color";
import { child } from "../../assets";
import { Spacer } from "../../components";

const MyPokemonList = () => {
  const [loading, setIsLoading] = useState(true);
  const [myPokemonList, setMyPokemonList] = useState(null);
  const [catchingPokemon, setCatchingPokemon] = useState(null);

  const getData = async () => {
    const url = "https://mypokemon-api.herokuapp.com/api/myPokemon";
    await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);
      })
      .then(([res, data]) => {
        // console.log(res, data);

        if (res === 200) {
          setMyPokemonList(data.result);
          // data.data?.map(() => dataRef.push(React.createRef()));
          // setIsOffline({
          //   ...isOffline,
          //   notification: false,
          //   reload: false,
          // });
          setIsLoading(false);
        } else {
          setIsLoading(false);
          // setIsOffline({
          //   ...isOffline,
          //   notification: false,
          //   reload: false,
          // });
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        setIsLoading(false);
        // setIsOffline({
        //   ...isOffline,
        //   notification: true,
        //   reload: true,
        // });
      });
  };

  const postData = async (name) => {
    const url = "https://mypokemon-api.herokuapp.com/api/myPokemon";

    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    })
      .then((response) => response.status)
      .then((res) => {
        console.log(res);

        if (res === 200) {
          setIsLoading(false);
          // setIsOffline({
          //   ...isOffline,
          //   notification: false,
          //   reload: false,
          // });
        } else {
          setIsLoading(false);
          // setIsFailed(true);
          // setIsOffline({
          //   ...isOffline,
          //   notification: false,
          //   reload: false,
          // });
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        setIsLoading(false);
      });
  };

  const catchPokemon = async (e) => {
    console.log("catch");
    e.preventDefault();

    setCatchingPokemon(Math.random() < 0.5);

    if (catchingPokemon === true) {
      let nick = prompt("You got a pokemon, give him a name!");
      let nickname = "";
      if (nick === null || nick === "") {
        nickname = "Pikatchu";
      } else {
        nickname = nick;
      }
      await postData(nickname);
    } else {
      alert("Try Again", {
        title: "Failed:(",
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
      <Header
        title={"My Pokemon"}
        hasBack={"/"}
        catchPokemon={(e) => catchPokemon(e)}
      />
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
        <p>My Pokemon ({myPokemonList?.length})</p>
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
            }}
          >
            {myPokemonList &&
              myPokemonList?.map((pokemon, idx) => (
                <MyPokemonCard width={"31%"} data={pokemon} key={idx} />
              ))}
          </div>
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
