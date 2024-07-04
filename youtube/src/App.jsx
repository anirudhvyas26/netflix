import React from "react";
import { Route, useNavigate, Routes, Navigate } from "react-router-dom";
import Home from "./home/Home";
import "./app.scss";
import Login from "./components/pages/watch/login/Login";
import Register from "./components/pages/watch/register/Register";
import Watch from "./components/pages/watch/Watch";
import { Movie } from "@mui/icons-material";
import { useContext, useEffect } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user, error } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user == null) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <Routes>
        <Route path="/" element={user == null ? <Login /> : <Home />} />
        <Route
          path="/register"
          element={user == null ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={user == null ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/home" element={user == null ? <Login /> : <Home />} />
        <Route path="/watch" element={user == null ? <Login /> : <Watch />} />
      </Routes>
    </>
  );
};

export default App;
