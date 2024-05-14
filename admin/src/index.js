import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { MovieContextProvider } from "./context/movieContext/MovieContext";
import { BrowserRouter as Router } from "react-router-dom";

const domNode = document.getElementById("root");

ReactDOM.createRoot(domNode).render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <Router>
          <App />
        </Router>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
