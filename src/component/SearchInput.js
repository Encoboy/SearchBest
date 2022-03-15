import React, { useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import { Input, Button } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput(props) {
  let inputRef = useRef();
  const classes = useStyles();
  return (
    <div className={classes.search_bar_box} style={{ width: props.inputWidth }}>
      <Input
        inputRef={inputRef}
        placeholder="Search for new products in 961K stores"
        className={classes.bar_input}
        disableUnderline={true}
        defaultValue={props.value ? props.value : ""}
      />
      <Button
        className={classes.bar_btn}
        onClick={() => {
          props.searchFn(inputRef.current.value);
        }}
      >
        <SearchIcon />
      </Button>
    </div>
  );
}
const useStyles = makeStyles({
  search_bar_box: {
    width: "55%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bar_input: {
    flex: 1,
    height: "35px",
    fontSize: "16px",
    border: "1px solid lightgray",
    borderRadius: "5px",
    backgroundColor: "#faf5e9",
    marginRight: "10px",
    padding: "0 10px",
  },
  bar_btn: {
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid lightgray",
    borderRadius: "5px",
  },
  bar_img: { width: "20px", height: "20px" },
});
