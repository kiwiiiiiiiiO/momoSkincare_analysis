import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Skincare from  "./routes/Skincare";
import Essence from  "./routes/Essence";
import Eyecream from "./routes/EyeCream";
import FaceMask from "./routes/FaceMask"; 
import Gel from "./routes/Gel";
import Lotion from "./routes/Lotion"; 
import Toner from "./routes/Toner";
import Cream from "./routes/Cream"; 
import Sidebar from "./components/Sidebar";
import App from "./App";
import ErrorPage from "./error-page";
import LipBalm from "./routes/LipBalm";
import Sunscreen from "./routes/Sunscreen"
import ToningCream from "./routes/ToningCream";
import NeckCream from "./routes/NeckCream";

const AppLayout =() => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
};

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path: "/",
        errorElement: <ErrorPage />,
        element: <App />,
      },
      {
        path: "skincare",
        element: <Skincare />,
      },
      {
        path: "cream",
        element: <Cream />,
      },
      {
        path: "essence",
        element: <Essence />,
      },
      { 
        path: "eyecream",
        element: <Eyecream />,
      },
      {
        path:"lipbalm",
        element: <LipBalm />,
      },
      {
        path: "sunscreen",
        element: <Sunscreen />
      },
      {
        path: "facemask",
        element: <FaceMask />,
      },
      {
        path: "gel",
        element: <Gel />,
      },
      {
        path: "lotion",
        element: <Lotion />,
      },
      {
        path: "toner",
        element: <Toner />,
      },
      {
        path: "neckcream",
        element: <NeckCream />
      },
      {
        path: "toningcream",
        element: <ToningCream />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
