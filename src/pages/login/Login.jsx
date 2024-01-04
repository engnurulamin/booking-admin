import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "LOGIN_START" });
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:8800/api/auth/login",
  //       credentials
  //     );
  //     console.log("res", res);
  //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  //     navigate("/");
  //   } catch (err) {
  //     console.error("Status code:", err.response?.status);
  //     dispatch({ type: "LOGIN_FAIL", payload: err.response?.data });
  //   }
  // };

  return (
    <div className="login">
      <div className="login-container">
        <input
          type="text"
          placeholder="username"
          id="username"
          // onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          // onChange={handleChange}
          className="lInput"
        />
        <button className="lButton">Login</button>
        {/* {error && <span className="err">{error.message}</span>} */}
      </div>
    </div>
  );
};

export default Login;
