import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import LoginForm from "../components/auth/Login";
import RegisterForm from "../components/auth/Register";
const Auth = ({ authRoute }) => {
  const body = (
    <>
      {authRoute === "login" && <LoginForm />}
      {authRoute === "register" && <RegisterForm />}
    </>
  );
  return (
    <>
      <div className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1>LearnIt</h1>
            <h4>Keep track of what you are learning</h4>
            {body}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
