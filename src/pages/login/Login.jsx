import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const [allValues, setAllValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const history = useHistory();

  const responseGoogle = (response) => {
    console.log(response);
    history.push("/profil");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = allValues;
    axios({
      method: "GET",
      baseURL: "http://localhost:3005",
      url: "/users",
      params: { email, password },
    })
      .then((response) => {
        if (response.data.length === 1) {
          history.push("/profil");
        } else {
          setError("Please try again!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <div className="login-form">
        <h1>Log in to Daisy</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={allValues.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="on"
            value={allValues.password}
            onChange={handleChange}
          />
          <br />
          <div className="button-login">
            <button type="submit">LOG IN</button>

            <Link to="/">
              <button type="button">HOME</button>
            </Link>
          </div>
          <hr />
          <div className="google-login">
            <GoogleLogin
              clientId="745050175794-2ep57mmtbh7ttmkh65q804phgekposqd.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </div>
          <h3>test</h3>
        </form>

        <p>{error}</p>
      </div>
    </div>
  );
};

export default Login;
