import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { pokeball } from "../../assets";

const Header = (props) => {
  console.log(props);
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
      }}
    >
      {props.hasBack && (
        <Link to={"/"}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      )}
      <p>{props.title}</p>
      {props.catchPokemon && (
        <div onClick={props.catchPokemon} style={{ cursor: "pointer" }}>
          <img src={pokeball} width={35} height={35} alt="pokeball" />
        </div>
      )}
    </div>
  );
};

export default Header;
