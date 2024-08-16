import { useSearchParams } from "react-router-dom";
import "./login.scss";
import { useContext, useState } from "react";
import { login } from "../../../../authContext/apicalls";
import { AuthContext } from "../../../../authContext/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const { user, dispatch } = useContext(AuthContext);

  const [email, setEmail] = useState("anirudhvyas26@gmail.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
           // src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="password" placeholder="Password" value={password} />
          <button className="LoginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Aniflix Project?
            <Link to="/register">
              <b>Sign up now</b>
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
