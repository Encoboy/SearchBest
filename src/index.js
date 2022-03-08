import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

/**
 * 实现过程考虑：
 * 0、考虑分成几个文件Api封装请求，component共有loading组件，pages展示的页面，redux管理状态，router管理路由
 * 1、考虑router路由的跳转，动态路由如何使用
 * 2、考虑如何使用redux和hooks结合使用，在reducer中初始化定义状态
 * 3、考虑如何使用dispatch发送一个请求之后如何将数据拿到
 * 4、考虑如何通过rem实现应用响应式
 * 注意：
 * 1、目前react-router只有第五版，第六版需要去英文文档看。没有了switch，直接用route，可以用useNavigate进行跳转
 * 2、react-redux对hook目前有了useDispatch来发送和useSelector来接收，不用再考虑以前的connect
 */

function inMobile() {
  document.getElementsByTagName("html")[0].style.fontSize =
    (document.documentElement.clientWidth / 375) * 100 + "px";
}
document.addEventListener("DOMContentLoaded", inMobile);
window.onresize = inMobile;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
