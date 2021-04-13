import React, { useState } from "react";
import { Spacer } from "../../components";
import {
  Header,
  PokemonInfo,
  PokemonMoves,
  PokemonBaseStats,
} from "../../templates";
import { toUpperCase } from "../../utils/upperCase";
import { Color } from "../../utils/Color";

const PokemonDetail = (props) => {
  const [setIsLoading] = useState(true);
  const [catchingPokemon, setCatchingPokemon] = useState(null);

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

  const [menu, setMenu] = useState({
    info: true,
    move: false,
    baseStats: false,
  });

  return (
    <div
      style={{
        width: "375px",
        backgroundColor: props.location.state.bgColor,
        marginLeft: "auto",
        marginRight: "auto",
        minHeight: "100vh",
      }}
    >
      <Header
        catchPokemon={(e) => catchPokemon(e)}
        hasBack={true}
        title={"Detail"}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          padding: "20px 20px 0 20px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <img
              src={props.location.state.image}
              alt={props.location.state.name}
              width="150"
              height="150"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2
              style={{ fontWeight: 300 }}
            >{`#${props.location.state.data?.pokemon?.order}`}</h2>
            <Spacer />
            <h3>{toUpperCase(props.location.state.name)}</h3>
            <Spacer size={5} />
            <div style={{ flexDirection: "row", display: "flex" }}>
              {props.location.state.data?.pokemon?.types?.map((type, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: props.location.state.typesColor,
                    borderRadius: 5,
                    padding: "3px 5px",
                    margin: "0 7px 0 0",
                  }}
                >
                  <p style={{ fontSize: "12px" }}>
                    {toUpperCase(type.type.name)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Spacer size={30} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 10,
          }}
        >
          <div
            style={{
              cursor: "pointer",
              padding: "3px 15px",
              borderBottom:
                menu.info && `2px solid ${props.location.state.typesColor}`,
            }}
            onClick={() =>
              setMenu({
                info: true,
                move: false,
                baseStats: false,
              })
            }
          >
            <h5
              style={{
                fontSize: 18,
                color: menu.info
                  ? props.location.state.typesColor
                  : Color.black,
              }}
            >
              Info
            </h5>
          </div>
          <div
            style={{
              cursor: "pointer",
              padding: "3px 15px",
              borderBottom:
                menu.move && `2px solid ${props.location.state.typesColor}`,
            }}
            onClick={() =>
              setMenu({
                info: false,
                move: true,
                baseStats: false,
              })
            }
          >
            <h5
              style={{
                fontSize: 18,
                color: menu.move
                  ? props.location.state.typesColor
                  : Color.black,
              }}
            >
              Move
            </h5>
          </div>
          <div
            style={{
              cursor: "pointer",
              padding: "3px 15px",
              borderBottom:
                menu.baseStats &&
                `2px solid ${props.location.state.typesColor}`,
            }}
            onClick={() =>
              setMenu({
                info: false,
                move: false,
                baseStats: true,
              })
            }
          >
            <h5
              style={{
                fontSize: 18,
                color: menu.baseStats
                  ? props.location.state.typesColor
                  : Color.black,
              }}
            >
              Base State
            </h5>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          minHeight: 200,
          padding: 20,
        }}
      >
        {menu.info && (
          <PokemonInfo pokemon={props.location.state.data?.pokemon} />
        )}
        {menu.move && (
          <PokemonMoves moves={props.location.state.data?.pokemon?.moves} />
        )}
        {menu.baseStats && (
          <PokemonBaseStats stats={props.location.state.data?.pokemon?.stats} />
        )}
      </div>
    </div>
  );
};

export default PokemonDetail;
