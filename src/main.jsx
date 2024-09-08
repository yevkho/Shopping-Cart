// react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./utilities/routes";

// main css
import "./main.css";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />;
  </StrictMode>
);
