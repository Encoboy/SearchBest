import Home from "../pages/Home";
import ProductTrends from "../pages/ProductTrends";
import GoodsTab from "../pages/GoodsTab";
import GoodsTabEnhancer from "../pages/GoodsTabEnhancer";

// 抽取routes
const routes = [
  { path: "/", element: <Home /> },
  {
    path: "/search",
    element: <ProductTrends />,
    children: [{ path: ":id", element: <ProductTrends /> }],
  },
  // { path: "/goods", element: <GoodsTab /> },
  { path: "/goods", element: <GoodsTabEnhancer /> },
];
export default routes;
