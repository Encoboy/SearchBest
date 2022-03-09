import React from "react";
import { useSelector } from "react-redux";
import LoadingCom from "../component/loadingCom";
export default function ProductTrends() {
  let data = useSelector((state) => state.product_trends);
  console.log(data);
  return (
    <div>
      <div style={{ fontSize: "0.16rem" }}>Related product trends</div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {data.length > 0 ? (
          data.map((item, index) => {
            return (
              <div
                style={{
                  fontSize: "0.16rem",
                  width: "1rem",
                  height: "1.5rem",
                  backgroundColor: "lightblue",
                  marginLeft: "0.1rem",
                }}
                key={index}
              >
                {item.name}
              </div>
            );
          })
        ) : (
          <LoadingCom />
        )}
      </div>
    </div>
  );
}
