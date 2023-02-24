import Button from "../Button";
import { Context } from "../../wrapper.js";
import { useContext } from "react";
import reducer, { DELETE_TASK, SET_INDEX_TO_EDIT } from "../../store";

const Task = (props) => {
  const { task, index } = props;
  const [state, dispatch] = useContext(Context);

  return (
    <div>
      <span>{task}</span>
      <Button
        value="Modifica"
        action={() => dispatch({ type: SET_INDEX_TO_EDIT, payload: index })}
      />
      <Button
        value="Elimina"
        style={{ background: "red" }}
        action={() => dispatch({ type: DELETE_TASK, payload: index })}
      />
    </div>
  );
};

export default Task;
