import React from "react";

const Button = ({ name, error, className, text, ...rest }) => {
  return (
    <div className="form-group">
      <button className={className} id={name} name={name} {...rest}>
        {text}
      </button>
    </div>
  );
};

export default Button;
