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
import Registration from "./Pages/Registration";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";
import AddQueries from "./Pages/AddQueries";
import { PrivateRoute } from "./Components/NavBar";

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
        element: <PrivateRoute><RecoForMe></RecoForMe></PrivateRoute>,
      },
      {
        path: "myrecommendation",
        element: <PrivateRoute><MyRecommendation></MyRecommendation></PrivateRoute>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "myqueries",
        loader: ()=>fetch('http://localhost:5000/queries'),
        element: <PrivateRoute><MyQueries /></PrivateRoute>,
      },
      {
        path: "addqueries",
        element: <AddQueries />,
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
