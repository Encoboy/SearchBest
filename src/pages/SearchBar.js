import React, { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProTtrendData } from "../redux/action";
import { debounce } from "../Utils/utils";
import styles from "./SearchBar.less";

export default function Search() {
  let inputRef = useRef();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const location = useLocation();
  let toProductTrendsPage = () => {
    navigate("/search/" + inputRef.current.value.replace(/\s+/g, "+"), {
      replace: location.pathname?.includes("search") ? true : false,
    });
    dispatch({ type: "proTrendData", product_trends: [] });
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
    <div className={styles.search_bar_box}>
      <div className={styles.bar_title}>
        <span>Beset</span>Search
      </div>
      <input
        onChange={debounce(toProductTrendsPage, 2000)}
        className={styles.bar_input}
        ref={inputRef}
      />
      <div className={styles.bar_btn} onClick={toProductTrendsPage}>
        按钮
      </div>
    </div>
  );
}
