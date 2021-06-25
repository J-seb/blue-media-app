import React from "react";
import Input from "./common/input";
import Button from "./common/button";

const FormSignUp = ({ submit, handleChange, profile }) => {
  const { email, password, fullname, gender } = profile;

  return (
    <form onSubmit={(e) => submit(e)}>
      <Input
        type={"email"}
        placeholder={"Email"}
        value={email}
        onChange={(e) => handleChange(e)}
        className={"login-signup-input"}
        name={"email"}
        autoFocus
        autoComplete="off"
      />
      <Input
        type={"password"}
        placeholder={"Password"}
        value={password}
        onChange={(e) => handleChange(e)}
        className={"login-signup-input"}
        name={"password"}
        autoComplete="off"
      />
      <Input
        placeholder={"Fullname"}
        value={fullname}
        onChange={(e) => handleChange(e)}
        className={"login-signup-input"}
        name={"fullname"}
        autoComplete="off"
      />
      <select
        name="gender"
        id="gender"
        className={"login-signup-input select-signup"}
        onChange={(e) => handleChange(e)}
        value={gender}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {/* <Input
        type={"select"}
        placeholder={"Date of Birth"}
        value={dateOfBirth}
        onChange={(e) => handleChange(e)}
        className={"login-signup-input"}
        name={"dateOfBirth"}
        autoComplete="off"
      /> */}
      <Button
        name={"buttonLogin"}
        className={"login-signup-button"}
        text={"Register"}
      />
    </form>
  );
};

export default FormSignUp;
