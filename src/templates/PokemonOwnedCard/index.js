import React from "react";
import { Link } from "react-router-dom";

const PokemonOwnedCard = () => {
  return (
    <Link to={"/owned"}>
      <div
        style={{
          display: "flex",
          backgroundColor: "wheat",
          height: 50,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>My Pokemon List</p>
      </div>
    </Link>
  );
};

export default PokemonOwnedCard;
