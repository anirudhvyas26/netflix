import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
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
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const userLoader = async () => {
    const user = false;
    if (!user) {
      return redirect("/login");
    }
    return null;
  };

  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Topbar />
              <div className="container">
                <Sidebar />
                <Home />
              </div>
            </>
          }
        />

        <Route
          path="/*"
          loader={userLoader}
          element={
            <>
              <Topbar />
              <div className="container">
                <Sidebar />
                <Routes>
                  <Route path="/users" element={<UserList />}></Route>
                  <Route path="/user/:userId" element={<User />}></Route>
                  <Route path="/newUser" element={<NewUser />}></Route>
                  <Route path="/movies" element={<ProductList />}></Route>
                  <Route
                    path="/product/:productId"
                    element={<Product />}
                  ></Route>
                  <Route path="/newproduct" element={<NewProduct />}></Route>
                </Routes>
              </div>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
