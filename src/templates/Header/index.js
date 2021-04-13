import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { pokeball } from "../../assets";
import { Color } from "../../utils/Color";

const Header = (props) => {
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
          <FontAwesomeIcon icon={faChevronLeft} color={Color.black} />
        </Link>
      )}
      <p>{props?.title}</p>
      {props?.catchPokemon && (
        <div onClick={props?.catchPokemon} style={{ cursor: "pointer" }}>
          <img src={pokeball} width={35} height={35} alt="pokeball" />
        </div>
      )}
    </div>
  );
};

export default Header;
