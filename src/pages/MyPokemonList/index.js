import React, { useState, useEffect } from "react";
import { Header, MyPokemonCard } from "../../templates";
import Swal from "sweetalert2";
import Lottie from "react-lottie";
import pikacu from "../../assets/animations/pikachu.json";
import { Color } from "../../utils/Color";
import { child } from "../../assets";
import { Spacer } from "../../components";
import { Col } from "reactstrap";

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
        if (res === 200) {
          setMyPokemonList(data.result);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        setIsLoading(false);
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
        if (res === 200) {
          setIsLoading(false);
        } else {
          setIsLoading(false);
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
      let names = myPokemonList?.map((a) => a.name);
      let pokemonName = prompt("You got a pokemon, give him a name!");
      let nickname = "";
      if (names.indexOf(nickname) === -1) {
        prompt("Please give another name");
      } else if (pokemonName === null || pokemonName === "") {
        nickname = "Pikatchu";
      } else {
        nickname = pokemonName;
        await postData(nickname);
        getData();
      }
    } else {
      alert("Try Again", {
        title: "Fokemon run away!",
      });
    }
  };

  const deleteData = async (id) => {
    const url = `https://mypokemon-api.herokuapp.com/api/myPokemon/${id}`;

    await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.status)
      .then((res) => {
        if (res === 200) {
          setIsLoading(false);
          getData();
        } else {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        setIsLoading(false);
      });
  };

  const deletePokemon = async (id, e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(id);
        Swal.fire("Deleted!", "Your Pokemon has been deleted.", "success");
      }
    });
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
        backgroundColor: "#FAE159",
        marginLeft: "auto",
        marginRight: "auto",
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
        {myPokemonList?.length && <p>My Pokemon ({myPokemonList?.length})</p>}
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
            {myPokemonList.length > 1 ? (
              myPokemonList?.map((pokemon, idx) => (
                <Col sm="3" lg="5" md="4" key={idx}>
                  <MyPokemonCard
                    width={"31%"}
                    data={pokemon}
                    deletePokemon={(e) => deletePokemon(pokemon.id, e)}
                  />
                </Col>
              ))
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p>Kamu belum punya pokemon, yuk cari</p>
              </div>
            )}
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
