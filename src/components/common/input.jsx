import React from "react";

const Input = ({ type = "text", placeholder, name, error, className, ...rest }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={className}
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
