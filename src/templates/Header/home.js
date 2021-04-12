import React from "react";
import { child } from "../../assets";
import { Link } from "react-router-dom";

const HomePageHeader = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#FAE159",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20,
      }}
    >
      <div>
        <h1>The World</h1>
        <h3>Pocket Monster</h3>
      </div>
      <Link to="/owned">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={child} width="60" height="60" alt="child" />
          <h5 style={{marginTop:5}}>My Pokemon</h5>
        </div>
      </Link>
    </div>
  );
};

export default HomePageHeader;
