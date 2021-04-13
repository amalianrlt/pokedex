import React from "react";
import { child } from "../../assets";
import { Link } from "react-router-dom";

const HomePageHeader = () => {
  return (
    <div
      style={{
        backgroundColor: "#FAE159",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <div>
        <h1 style={{ fontWeight: 900 }}>The World</h1>
        <h3 style={{ fontWeight: 300 }}>of Pocket Monster</h3>
      </div>
      <Link to="/mypokemon">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={child} width="60" height="60" alt="child" />
          <h5 style={{ marginTop: 5, color: '#E95555' }}>My Pokemon</h5>
        </div>
      </Link>
    </div>
  );
};

export default HomePageHeader;
