import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import HocSearchInput from "../component/HocSearchInput";
import { getClientWidth } from "../redux/action";
export default function Search() {
  let classes = useStyles();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let isShowHdSeInput = useSelector((state) => state.isShowHdSeInput);
  let isBarTitleNameScal = useSelector((state) => state.isBarTitleNameScal);
  let toHomePage = () => {
    dispatch({ type: "isShowHdSearchInput", isShowHdSeInput: false });
    navigate("/", { replace: true });
  };
  window.onresize = () => {
    dispatch(getClientWidth(document.documentElement.clientWidth));
  };
  return (
    <div className={classes.search_bar_box}>
      {isBarTitleNameScal ? (
        <div className={classes.bar_title} onClick={toHomePage}>
          <span className={classes.best}>Best</span>
          <span className={classes.search}>Search</span>
        </div>
      ) : (
        <div className={classes.st}>ST</div>
      )}
      {isShowHdSeInput ? <HocSearchInput inputWidth={"75%"} /> : null}
    </div>
  );
}

const useStyles = makeStyles({
  search_bar_box: {
    minHeight: "30px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fbf5e7",
    borderBottom: "1px solid lightgray",
    padding: "10px",
  },
  bar_title: {
    fontSize: "20px",
    marginRight: "10px",
  },
  best: {
    fontWeight: 400,
  },
  search: {
    fontWeight: 200,
  },
  st: {
    height: "30px",
    width: "30px",
    fontSize: "16px",
    fontWeight: 400,
    backgroundColor: "black",
    borderRadius: "5px",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
  },
});
