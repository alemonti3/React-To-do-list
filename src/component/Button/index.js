import React, { useState } from "react";

export const Button = (props) => {
  const { disabled=false, value, action } = props;

  return (
    <button disabled={disabled} onClick={action}>
      {value}
    </button>
  );
};

export default Button;
