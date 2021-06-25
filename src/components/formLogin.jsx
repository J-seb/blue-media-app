import React from "react";
import Input from "./common/input";
import Button from "./common/button";

const FormSignUp = ({ submit, handleChange, profile }) => {
  const { email, password } = profile;

  return (
    <form onSubmit={(e) => submit(e)}>
      <Input
        type={"email"}
        placeholder={"Email"}
        className={"login-signup-input"}
        value={email}
        onChange={(e) => handleChange(e)}
        name={"email"}
        autoFocus
        autoComplete="off"
      />
      <Input
        type={"password"}
        placeholder={"Password"}
        value={password}
        className={"login-signup-input"}
        onChange={(e) => handleChange(e)}
        name={"password"}
        autoComplete="off"
      />
      <Button
        name={"buttonLogin"}
        className={"login-signup-button"}
        text={"Enter"}
      />
    </form>
  );
};

export default FormSignUp;
