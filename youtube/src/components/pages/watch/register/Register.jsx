import "./register.scss";
import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../../../authContext/apicalls";
import { AuthContext } from "../../../../authContext/AuthContext";

export default function Register() {
  const { user, dispatch } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const usernameRef = useRef();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("dispatch :>> ", dispatch);
    register({ email, username, password }, dispatch);
  };

  // const handleStart = () => {
  //   setEmail(emailRef.current.value);
  // };

  // const handleFinish = async (e) => {
  //   e.preventDefault();

  //   setPassword(passwordRef.current.value);
  //   setUsername(usernameRef.current.value);
  //   try {
  //     const res = await axios.post("http://localhost:8800/api/auth/register", {
  //       email,
  //       username,
  //       password,
  //     });
  //   } catch (err) {
  //     if (err.response.data.code == 11000) {
  //       console.log(
  //         "dispactching registerFailureUserExists",
  //         err.response.data.keyValue.email
  //       );
  //       // dispatch(registerFailureUserExists(err.response.data.keyValue.email));
  //     }
  //     console.log("123", err.response.data.code == 11000);
  //     console.log(err);
  //   }
  // };
  return (
    <div className="register">
      {JSON.stringify(user)}
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="input">
          <input
            type="email"
            placeholder="email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="registerbutton" onClick={handleRegister}>
            Get Started
          </button>
        </div>

        <form className="input">
          <input
            type="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="registerbutton" onClick={handleRegister}>
            Start
          </button>
        </form>
      </div>
    </div>
  );
}
