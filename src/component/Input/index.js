import React, { useState } from "react";

const Input = (props) => {
  const { handleBlur, initialValue = "" } = props;

  const [text, setText] = useState(initialValue);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <input
      onBlur={() => handleBlur(text)}
      onChange={handleChange}
      value={text}
    />
  );
};

export default Input;
