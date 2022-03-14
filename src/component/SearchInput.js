import React, { useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import { Input } from "@material-ui/core";

export default function SearchInput(props) {
  let inputRef = useRef();
  const classes = useStyles();
  return (
    <div className={classes.search_bar_box}>
      <Input
        inputRef={inputRef}
        placeholder="Search for new products in 961K stores"
        className={classes.bar_input}
        disableUnderline={true}
      />
      <div
        className={classes.bar_btn}
        onClick={() => {
          props.searchFn(inputRef.current.value);
        }}
      >
        <img
          className={classes.bar_img}
          src={require("../images/search.png")}
        />
      </div>
    </div>
  );
}
const useStyles = makeStyles({
  search_bar_box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bar_input: {
    width: "2.5rem",
    height: "0.12rem",
    fontSize: "0.08rem",
    border: "1px solid lightgray",
    borderRadius: "0.02rem",
    backgroundColor: "#faf5e9",
    marginRight: "0.02rem",
    padding: "0 0.03rem",
  },
  bar_btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "0.22rem",
    height: "0.12rem",
    border: "1px solid lightgray",
    borderRadius: "0.02rem",
  },
  bar_img: { width: "0.08rem", height: "0.08rem" },
});
