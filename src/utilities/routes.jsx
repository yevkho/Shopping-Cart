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
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <ShopLayout />,
        children: [
          {
            index: true,
            element: <Shop />,
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
