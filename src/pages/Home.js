import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HocSearchInput from "../component/HocSearchInput";
import { makeStyles } from "@material-ui/styles";

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "isShowHdSearchInput", isShowHdSeInput: false });
  });
  return (
    <div className={classes.box}>
      <div className={classes.title}>Search Trends</div>
      <HocSearchInput />
    </div>
  );
}

const useStyles = makeStyles({
  box: {
    backgroundColor: "#faf5e9",
    width: "100%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "0.2rem",
    fontWeight: 300,
    margin: "0.2rem 0",
  },
});
