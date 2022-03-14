import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import HocSearchInput from "../component/HocSearchInput";
import styles from "./SearchBar.less";

export default function Search() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let isShowHdSeInput = useSelector((state) => state.isShowHdSeInput);
  let toHomePage = () => {
    dispatch({ type: "isShowHdSearchInput", isShowHdSeInput: false });
    navigate("/");
  };
  return (
    <div className={styles.search_bar_box}>
      <div className={styles.bar_title} onClick={toHomePage}>
        <span>Best</span>
        <span>Search</span>
      </div>
      {isShowHdSeInput ? <HocSearchInput /> : null}
    </div>
  );
}
