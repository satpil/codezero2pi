import React from "react";

function Input(props) {
    const { type, name, placeholder, changeHandler, required } = props;
  return (
    <input
      type= {type}
      name={name}
      placeholder={placeholder}
      onChange={changeHandler}
      required={required || false}
    />
  );
}
export default Input;
