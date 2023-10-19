import React, { useState } from "react";
import "./entry.style.css";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";
const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    // console.log(name, value);
  };
  const handleOnSumit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("fill up all the fields");
    }
    // todo api call to submit the form
    console.log(email, password);
  };
  const handleOnResetSumit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Please enter the email");
    }
    // todo api call to submit the form
    console.log(email);
  };
  const formSwitcher = (formType) => {
    setFrmLoad(formType);
  };
  return (
    <div className="entry-page bg-info">
      <div className="jumbotron form-box">
        {frmLoad === "login" && (
          <LoginForm
            handleOnSumit={handleOnSumit}
            handleOnChange={handleOnChange}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
          />
        )}
        {frmLoad === "reset" && (
          <ResetPassword
            handleOnResetSumit={handleOnResetSumit}
            handleOnChange={handleOnChange}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </div>
    </div>
  );
};

export default Entry;
