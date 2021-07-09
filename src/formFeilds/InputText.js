import React from "react";

const InputText = ({ input, label, placeholder, meta: { touched, error } }) => (
  <div>
    <label htmlFor={input.name}>{label}</label>
    <br />
    <input {...input} type="text" placeholder={placeholder} />
    {touched && error && <span className="error">{error}</span>}
  </div>
);

export default InputText;
