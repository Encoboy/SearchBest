import { useRoutes } from "react-router-dom";
import routes from "./router/router";
import Search from "./pages/SearchBar";

function App() {
  return (
    <>
      <Search />
      {useRoutes(routes)}
    </>
  );
}

export default App;
