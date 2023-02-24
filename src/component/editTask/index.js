import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { Context } from "../../wrapper.js";
import { useContext } from "react";
import { DISCARD_TASK, SAVE_EDIT_TASK } from "../../store";

const EditTask = (props) => {
  const { task } = props;
  const [state, dispatch] = useContext(Context);
  const [text, setText] = useState(task);

  const handleBlur = (value) => {
    setText(value);
  };

  return (
    <div>
      <Input initialValue={task} handleBlur={handleBlur} />
      <Button value="Annulla" action={() => dispatch({ type: DISCARD_TASK })} />
      <Button
        value="Salva"
        action={() => dispatch({ type: SAVE_EDIT_TASK, payload: text })}
      />
    </div>
  );
};

export default EditTask;
