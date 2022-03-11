import React, { useState } from "react";

import styles from "./GoodsTab.less";

const TabItem = ({ children }) => {
  return <div className={styles.item}>{children}</div>;
};
TabItem.displayName = "tabItem";

const Tabs = ({ children, onChange }) => {
  const [sName, setSName] = useState(children[0].props.name);
  const [renderChildren, setRenderChildren] = useState(children[0]);
  return (
    <>
      <div className={styles.tab_box}>
        {children.map((item, index) => {
          return (
            <div
              className={
                sName === item.props.name
                  ? styles.selectItemBox
                  : styles.itemBox
              }
              onClick={() => {
                setSName(item.props.name);
                setRenderChildren(item);
              }}
              key={index}
            >
              {item.props.name}
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
