import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Queries from "./Pages/Queries";
import RecoForMe from "./Pages/RecoForMe";
import MyQueries from "./Pages/MyQueries";
import MyRecommendation from "./Pages/MyRecommendation";
import SignUp from "./Pages/SignUp";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "queries",
        element: <Queries></Queries>,
      },
      {
        path: "recforme",
        element: <RecoForMe></RecoForMe>,
      },
      {
        path: "myqueries",
        element: <MyQueries></MyQueries>,
      },
      {
        path: "myrecommendation",
        element: <MyRecommendation></MyRecommendation>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
