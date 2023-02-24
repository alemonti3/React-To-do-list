import React from "react";
import Button from "../Button";
import { Context } from "../../wrapper.js";
import { useContext } from "react";
import { RESTORE_TASK } from "../../store";

const RestoreTask = (props) => {
  const { index, task } = props;
  const [state, dispatch] = useContext(Context);

  return (
    <div>
      {task}
      <Button
        value="Ripristina"
        action={() => dispatch({ type: RESTORE_TASK, payload: index })}
      />
    </div>
  );
};

export default RestoreTask;
