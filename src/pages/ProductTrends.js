import React from "react";
import { useSelector } from "react-redux";
import LoadingCom from "../component/loadingCom";
import { makeStyles } from "@material-ui/styles";
// import styles from "./ProductTrends.less";
const oneRowLen = 4;
export default function ProductTrends() {
  const classes = useStyles();
  let data = useSelector((state) => state.product_trends);
  let fillData = new Array(oneRowLen - (data.length % oneRowLen)).fill("");
  return (
    <div className={classes.box}>
      <div className={classes.prod_title}>Related product trends</div>
      <div className={classes.prod_box}>
        {data.length > 0 ? (
          data.map((item, index) => {
            return (
              <div className={classes.prod_item} key={index} onClick={() => {}}>
                {item.name}
              </div>
            );
          })
        ) : (
          <LoadingCom nums={4} />
        )}
        {fillData.map((item, index) => (
          <div className={classes.prod_none_item} key={index}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
const useStyles = makeStyles({
  box: {
    backgroundColor: "#faf5e9",
    width: "2rem",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red",
    margin: "auto",
  },
  prod_title: {
    fontSize: "0.08rem",
    fontWeight: 200,
    margin: "0.1rem 0 0.05rem 0",
  },
});
