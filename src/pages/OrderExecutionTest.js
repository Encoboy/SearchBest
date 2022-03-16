import React, { useEffect, useState } from "react";
import HocOrderExecution from "../component/HocOrderExecution";
// my code
const crateHoc = HocOrderExecution();
const ComA = function () {
  useEffect(() => {
    console.log("A");
  });
  return <div>A</div>;
};
const ComB = function () {
  useEffect(() => {
    console.log("B");
  });
  return <div>B</div>;
};
const ComC = function () {
  useEffect(() => {
    console.log("C");
  });
  return <div>C</div>;
};

const ComponetA = crateHoc(ComA);
const ComponetC = crateHoc(ComC);
const ComponetB = crateHoc(ComB);

export default function OrderExcutionText() {
  return (
    <>
      <ComponetA />
      <ComponetB />
      <ComponetC />
    </>
  );
}

/* 创建 hoc  other code*/
// const loadingHoc = HocOrderExecution();

// function CompA() {
//   useEffect(() => {
//     console.log("组件A挂载完成");
//   }, []);
//   return <div>组件 A </div>;
// }
// function CompB() {
//   useEffect(() => {
//     console.log("组件B挂载完成");
//   }, []);
//   return <div>组件 B </div>;
// }
// function CompC() {
//   useEffect(() => {
//     console.log("组件C挂载完成");
//   }, []);
//   return <div>组件 C </div>;
// }

// function CompD() {
//   useEffect(() => {
//     console.log("组件D挂载完成");
//   }, []);
//   return <div>组件 D </div>;
// }
// function CompE() {
//   useEffect(() => {
//     console.log("组件E挂载完成");
//   }, []);
//   return <div>组件 E </div>;
// }

// const ComponentA = loadingHoc(CompA);
// const ComponentB = loadingHoc(CompB);
// const ComponentC = loadingHoc(CompC);
// const ComponentE = loadingHoc(CompE);
// const ComponentD = loadingHoc(CompD);

// export default function Index() {
//   const [isShow, setIsShow] = useState(false);
//   return (
//     <div>
//       <ComponentA />
//       <ComponentB />
//       <ComponentC />
//       {isShow && <ComponentD />}
//       {isShow && <ComponentE />}
//       <button onClick={() => setIsShow(true)}> 挂载组件D ，E </button>
//     </div>
//   );
// }
