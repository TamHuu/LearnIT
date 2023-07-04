import React from "react";
import LoginForm from "../components/auth/Login";
import RegisterForm from "../components/auth/Register";

const Authentication = ({ authRoute }) => {
  const body = (
    <>
      {authRoute === "login" && <LoginForm />}
      {authRoute === "register" && <RegisterForm />}
    </>
  );
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner ">
          <h4>Keep track of what you are learning</h4>
          {body}
        </div>
      </div>
    </div>
  );
};

export default Authentication;
