import Home from "../pages/Home";
import ProductTrends from "../pages/ProductTrends";
import OrderExcutionText from "../pages/OrderExecutionTest";

// 抽取routes
const routes = [
  { path: "/", element: <Home /> },
  {
    path: "/search",
    element: <ProductTrends />,
    children: [{ path: ":id", element: <ProductTrends /> }],
  },
  { path: "/order", element: <OrderExcutionText /> },
];
export default routes;
