import React from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Color } from "../../utils/Color";

const Pagination = (props) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: Color.lightGrey,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
      }}
    >
      <>
        <div onClick={props.prev} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <p>
          {props.page}/{props.total}
        </p>
        <div onClick={props.next} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </>
    </div>
  );
};

export default Pagination;
