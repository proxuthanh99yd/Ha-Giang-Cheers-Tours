import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout";
import Home from "./pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
