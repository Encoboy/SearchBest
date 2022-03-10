import React from "react";
import { useSelector } from "react-redux";
import LoadingCom from "../component/loadingCom";
import styles from "./ProductTrends.less";
const oneRowLen = 4;
export default function ProductTrends() {
  let data = useSelector((state) => state.product_trends);
  let fillData = new Array(oneRowLen - (data.length % oneRowLen)).fill("");
  return (
    <div>
      <div className={styles.prod_title}>Related product trends</div>
      <div className={styles.prod_box}>
        {data.length > 0 ? (
          data.map((item, index) => {
            return (
              <div className={styles.prod_item} key={index}>
                {item.name}
              </div>
            );
          })
        ) : (
          <LoadingCom nums={4} />
        )}
        {fillData.map((item, index) => (
          <div className={styles.prod_none_item} key={index}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
