import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProTtrendData } from "../redux/action";

export default function Search() {
  let inputRef = useRef();
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let toProductTrendsPage = () => {
    navigate("/search/" + inputRef.current.value.replace(/\s+/g, "+"));
    dispatch(
      getProTtrendData({
        method: "/interview/keyword_search",
        params: {
          search_phrase: inputRef.current.value,
          login_token: "INTERVIEW_SIMPLY2021",
        },
      })
    );
  };

  return (
    <div style={{ justifyContent: "space-around", display: "flex" }}>
      <div style={{ fontSize: "0.2rem", flex: "1" }}>BesetSearch</div>
      <input style={{ flex: 1, fontSize: "0.16rem" }} ref={inputRef} />
      <button
        style={{ flex: 1, fontSize: "0.16rem" }}
        onClick={toProductTrendsPage}
      >
        按钮
      </button>
    </div>
  );
}
