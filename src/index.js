import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

/**
 * 实现过程考虑：
 * 1、 考虑分成几个文件：Api封装请求，component共有的loading组件，pages展示的页面，redux管理状态，router管理路由
 * 2、考虑router路由的跳转，动态路由如何使用：使用useRoutes
 * 3、考虑如何结合redux和hooks，提取状态，在reducer中初始化定义状态：在action中定义一个请求数据的闭包函数。
 * 4、考虑如何使用dispatch发送一个请求之后如何将数据拿到，在这个过程中如何展示loading
 * 5、考虑如何通过rem实现应用响应式
 * 注意：
 * 1、目前react-router只有第五版，第六版需要去英文文档看。没有了switch，直接用routes，可以用useNavigate进行跳转
 * 2、react-redux对hook目前有了useDispatch来发送和useSelector来接收，不用再考虑以前的connect
 * 3、在搜索页的loading和数据展示的变化，可以直接在redux中定义一个初始化的数据为空数组
 */

function inMobile() {
  document.getElementsByTagName("html")[0].style.fontSize =
    (document.documentElement.clientWidth / 375) * 100 + "px";
}
document.addEventListener("DOMContentLoaded", inMobile); //  DOMContentLoaded html加载和解析完之后触发，无需等待图片，样式加载完毕。load就是全部加载完毕之后触发。
window.onresize = inMobile;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
