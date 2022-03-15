import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProTtrendData } from "../redux/action";
import SearchInput from "./SearchInput";

export default function HocSearchInput(props) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const location = useLocation();
  let inputValue = location.pathname?.includes("search")
    ? location.pathname.split("/")[2].split("+").join(" ")
    : "";
  let toProductTrendsPage = (value) => {
    navigate("/search/" + value.replace(/\s+/g, "+"), {
      replace: location.pathname?.includes("search") ? true : false,
    });
    dispatch({ type: "proTrendData", product_trends: [] });
    dispatch({ type: "isShowHdSearchInput", isShowHdSeInput: true });
    dispatch(
      getProTtrendData({
        method: "/interview/keyword_search",
        params: {
          search_phrase: value,
          login_token: "INTERVIEW_SIMPLY2021",
        },
      })
    );
  };

  return (
    <SearchInput value={inputValue} searchFn={toProductTrendsPage} {...props} />
  );
}
