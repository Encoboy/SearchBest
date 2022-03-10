import React from "react";
import styles from "./loadingCom.less";

export default function LoadingCom(props) {
  return (
    <>
      {new Array(props.nums).fill("").map((item, index) => {
        return (
          <div className={styles.loading} key={index}>
            {item}
          </div>
        );
      })}
    </>
  );
}
