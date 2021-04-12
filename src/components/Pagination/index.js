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
        <div
          onClick={props.page === 1 ? null : props.prev}
          style={{ cursor: props.page === 1 ? null : "pointer" }}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            color={props.page === 1 ? Color.grey : Color.black}
          />
        </div>
        <p>
          {props.page}/{props.total}
        </p>
        <div
          onClick={props.page === 56 ? null : props.next}
          style={{ cursor: props.page === 56 ? null : "pointer" }}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            color={props.page === 56 ? Color.grey : Color.black}
          />
        </div>
      </>
    </div>
  );
};

export default Pagination;
