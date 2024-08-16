import React from "react";
import { Route, useNavigate, Routes, Navigate, useLocation  } from "react-router-dom";
import Home from "./home/Home";
import "./app.scss";
import Login from "./components/pages/watch/login/Login";
import Register from "./components/pages/watch/register/Register";
import Watch from "./components/pages/watch/Watch";
import { Movie } from "@mui/icons-material";
import { useContext, useEffect } from "react";
import { AuthContext } from "./authContext/AuthContext";
import dotenv from "dotenv";

const App = () => {
  const { user, error } = useContext(AuthContext);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user == null && location.pathname !=="/register") {
      navigate("/login");
    }
  }, [user, location.pathname,navigate, ]);

  return (
    <>
      <Routes>
        <Route path="/" element={user == null ? <Login /> : <Home />} />
        <Route
          path="/register"
          element={<Navigate to="/" />}
        />
        <Route
          path="/login"
          element={<Navigate to="/" />}
        />
        <Route path="/home" element={user == null ? <Login /> : <Home />} />
        <Route path="/watch" element={user == null ? <Login /> : <Watch />} />
        <Route path="/series" element={user == null ? <Login /> : <Home type="series" />}/>
        <Route path="/movies" element={user == null ? <Login /> : <Home type="movies" />}/>
      </Routes>
    </>
  );
};


export default App;
