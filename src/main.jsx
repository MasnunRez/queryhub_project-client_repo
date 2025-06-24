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
import UpdateQuery from "./Pages/UpdateQuery";
import QueryDetails from "./Pages/QueryDetails";

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
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/queries`),
        element: <Queries></Queries>,
      },
      {
        path: "recforme",
        element: (
          <PrivateRoute>
            <RecoForMe></RecoForMe>
          </PrivateRoute>
        ),
      },
      {
        path: "myrecommendation",
        element: (
          <PrivateRoute>
            <MyRecommendation></MyRecommendation>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <MyQueries />
          </PrivateRoute>
        ),
      },
      {
        path: "addqueries",
        element: <AddQueries />,
      },
      {
        path: "updatequeries/:id",
        loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/queries/${params.id}`),
        element: <UpdateQuery></UpdateQuery>,
      },
      {
        path: "querydetails/:id",
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/queries/${params.id}`),
        element: <QueryDetails></QueryDetails>,
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
