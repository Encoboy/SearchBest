import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

function inMobile() {
  document.getElementsByTagName("html")[0].style.fontSize =
    (document.documentElement.clientWidth / 375) * 100 + "px";
}
document.addEventListener("DOMContentLoaded", inMobile);
window.onresize = inMobile;
document.getElementsByTagName("body")[0].style.cssText =
  "height:100%;margin:0;padding:0";
document.getElementsByTagName("html")[0].style.height = "100%";
document.getElementById("root").style.height = "100%";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
