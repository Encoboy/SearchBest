import Home from "../pages/Home";
import ProductTrends from "../pages/ProductTrends";
import OrderExcutionText from "../pages/OrderExecutionTest";
import RouterEnhance from "../pages/RouterEnhance";

// 抽取routes
const routes = [
  { path: "/", element: <Home /> },
  {
    path: "/search",
    element: <ProductTrends />,
    children: [{ path: ":id", element: <ProductTrends /> }],
  },
  { path: "/order", element: <OrderExcutionText /> },
  { path: "/routerenhance", element: <RouterEnhance /> },
];
export default routes;
