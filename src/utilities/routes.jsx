// pages
// import App from "./App.jsx";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import ShopItem from "../Pages/ShopItem";
import ErrorPage from "../Pages/ErrorPage";

// layouts
import RootLayout from "../Layouts/RootLayout";
import ShopLayout from "../Layouts/ShopLayout";

// router
const routes = [
  {
    path: "/",
    element: <RootLayout />, //can also be called <App/>
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <ShopLayout />, // this as a separate level is not necessary likely (see https://react.dev/learn/passing-data-deeply-with-context)
        children: [
          {
            index: true,
            element: <Shop />, // can probably wrap 'Shop' inside 'ShopLayout" in a singe component
          },
          {
            path: ":itemId",
            element: <ShopItem />,
          },
        ],
      },
    ],
  },
];

export default routes;
