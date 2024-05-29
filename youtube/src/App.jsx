import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  redirect,
  Navigate,
} from "react-router-dom";
import Home from "./home/Home";
import "./app.scss";
import Login from "./components/pages/watch/login/Login";
import Register from "./components/pages/watch/register/Register";
import Watch from "./components/pages/watch/Watch";
import { Movie } from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user, error } = useContext(AuthContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: async () => (user == "null" ? redirect("/login") : null),
    },
    {
      path: "/register",
      element: user == "null" ? <Register /> : null,
      loader: async () => (user !== "null" ? redirect("/") : null),
    },

    {
      path: "/login",
      element: user !== "null" ? <Navigate to="/" /> : <Login />,
      loader: async () => (user !== "null" ? redirect("/") : null),
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/watch",
      element: <Watch />,
    },
    {
      path: "/movies",
      element: <Home type="movies" />,
    },
    {
      path: "/series",
      element: <Home type="series" />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
};

export default App;
