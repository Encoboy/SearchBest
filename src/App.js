import * as React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router/router";
import Search from "./pages/SearchBar";
import styles from "./App.less";

function App() {
  return (
    <div className={styles.main}>
      <Search />
      {useRoutes(routes)}
    </div>
  );
}

export default App;
