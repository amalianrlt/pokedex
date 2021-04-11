import React from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
      }}
    >
      <>
        <div
          onClick={props.page <= 1 ? 1 : props.prev}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <p>{props.page}</p>
        <div onClick={props.next} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </>
    </div>
  );
};

export default Pagination;
