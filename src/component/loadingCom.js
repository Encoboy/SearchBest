import React from "react";

export default function LoadingCom() {
  let data = ["", "", "", ""];
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {data.map((item, index) => {
        return (
          <div
            style={{
              width: "1rem",
              height: "1rem",
              backgroundColor: "lightgray",
              marginLeft: "0.1rem",
            }}
            key={index}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
