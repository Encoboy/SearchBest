import Home from "../pages/Home";
import ProductTrends from "../pages/ProductTrends";

// 抽取routes
const routes = [
  { path: "/", element: <Home /> },
  {
    path: "/search",
    element: <ProductTrends />,
    children: [{ path: ":id", element: <ProductTrends /> }],
  },
];
export default routes;
