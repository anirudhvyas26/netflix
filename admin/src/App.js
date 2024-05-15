import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { Route, BrowserRouter, Routes, useNavigate, Navigate, Outlet } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {

  const { user } = useContext(AuthContext);

  return (
    <>
      < BrowserRouter >
        <Routes>
          <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
          <Route path="/" element={
            (user ? <>
              <Topbar />
              <div className="container">
                <Sidebar />
                <Outlet />
              </div>
            </> : <Navigate to="/login" />)
          }>
            <>
              <Route
                path=""
                element={<Home />}
              />
              <Route path="users" element={<UserList />} />
              <Route path="movies" element={<ProductList />} />
              <Route path="product/:id" element={<Product />} />
              <Route path="newproduct" element={<NewProduct />} />

            </>
          </Route>

        </Routes>
      </BrowserRouter >
    </>

  );
}

export default App;
