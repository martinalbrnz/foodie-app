import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Sidenav from "./app/components/layout/Sidenav";
import { router } from "./app/routes/router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="flex h-screen w-screen">
      <Sidenav />
      <main className="flex justify-center h-full flex-grow-[1] overflow-y-auto bg-gray-100 custom-scrollbar">
        <div className="w-full max-w-7xl">
          <RouterProvider router={router} />
        </div>
      </main>
    </div>
  </React.StrictMode>
);
