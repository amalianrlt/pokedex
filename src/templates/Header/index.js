import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
      }}
    >
      <Link to={"/"}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
      <p>Pokemon's Detail</p>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

export default Header;
