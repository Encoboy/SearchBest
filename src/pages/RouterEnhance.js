/**
 * 用继承的方式，实现一个增强的路由
 */
import React from "react";
import { Route } from "react-router";

const RouterPermission = React.createContext();

// 这里报错了，好像着这样转化成es5执行会出错，或许可以配置不要将es6转es5，但是不会配置。
class PRoute extends Route {
  static contextType = RouterPermission; /* 使用 context */
  constructor(...arg) {
    super(...arg);
    const { path } = this.props;
    /* 如果有权限 */
    console.log(this.context);
    const isPermiss = this.context.indexOf(path) >= 0; /* 判断是否有权限 */
    if (!isPermiss) {
      /* 修改 render 函数，如果没有权限，重新渲染一个 Route ，ui 是无权限展示的内容  */
      this.render = () => (
        <Route {...this.props}>
          <div>暂无权限</div>
        </Route>
      );
    }
  }
}
export default (props) => {
  /* 模拟的有权限的路由列表 */
  const permissionList = ["/extends/a", "/extends/b"];
  return (
    <RouterPermission.Provider value={permissionList}>
      <Index {...props} />
    </RouterPermission.Provider>
  );
};

function Test1() {
  return <div>权限路由测试一</div>;
}

function Test2() {
  return <div>权限路由测试二</div>;
}

function Test3() {
  return <div>权限路由测试三</div>;
}

function Index({ history }) {
  const routerlist = [
    { name: "测试一", path: "/extends/a" },
    { name: "测试二", path: "/extends/b" },
    { name: "测试三", path: "/extends/c" },
  ];
  return (
    <div>
      {routerlist.map((item) => (
        <button key={item.path} onClick={() => history.push(item.path)}>
          {item.path}
        </button>
      ))}
      <PRoute component={Test1} path="/extends/a" />
      <PRoute component={Test2} path="/extends/b" />
      <PRoute component={Test3} path="/extends/c" />
    </div>
  );
}
