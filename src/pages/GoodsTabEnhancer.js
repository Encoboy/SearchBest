import React, { useState } from "react";
import styles from "./GoodsTab.less";
// 使用了react的组合模式开发
const TabItem = ({ children }) => {
  return <div className={styles.item}>{children}</div>;
};
TabItem.displayName = "tabItem";

const Tabs = ({ children, onChange }) => {
  const [sName, setSName] = useState(children[0].props.name);
  let renderChildren;
  let tabList = [];
  React.Children.forEach(children, (item) => {
    if (React.isValidElement(item) && item.type.displayName === "tabItem") {
      const { props } = item;
      const { name, label } = props;
      const tabItem = {
        name,
        label,
        active: name === sName,
        component: item,
      };
      if (name == sName) renderChildren = item;
      tabList.push(tabItem);
    }
  });
  return (
    <>
      <div className={styles.tab_box}>
        {tabList.map((item, index) => {
          return (
            <div
              className={item.active ? styles.selectItemBox : styles.itemBox}
              onClick={() => {
                setSName(item.name);
              }}
              key={index}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      {renderChildren}
    </>
  );
};

const Foods = () => {
  return <div style={{ fontSize: "0.16rem" }}>foods</div>;
};

export default function GoodsTab() {
  return (
    <Tabs onChange={(type) => console.log(type)}>
      <TabItem name="react" label="react">
        React 我的世界
      </TabItem>
      <TabItem name="vue" label="vue">
        Vue 你的世界
      </TabItem>
      <TabItem name="angular" label="angular">
        Angular 没有人的世界
      </TabItem>
    </Tabs>
  );
}
