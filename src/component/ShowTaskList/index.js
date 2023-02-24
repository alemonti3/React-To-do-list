import React from "react";
import EditTask from "../editTask";
import Task from "../Task";
import { Context } from "../../wrapper.js";
import { useContext } from "react";
import RestoreTask from "../restoreTask";

const ShowTaskList = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <div id="content">
      {state.taskList.map((el, index) => {
        if (index === state.indexToEdit) {
          return <EditTask key={index} task={el.task} />;
        }

        if (state.showDeleted) {
          if (el.deleted) {
            return <RestoreTask key={index} index={index} task={el.task} />;
          }
        }

        if (!el.deleted) {
          return <Task key={index} index={index} task={el.task} />;
        }

        return null;
      })}
    </div>
  );
};

export default ShowTaskList;
