import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidenav from "./app/components/layout/Sidenav.tsx";
import Home from "./app/views/Home.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Sidenav />
    <RouterProvider router={router} />
  </React.StrictMode>
);
