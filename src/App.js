import "./App.css";
import { useContext, useState } from "react";
import { Context } from "./wrapper";
import { Button } from "./component/Button/index.js";
import ShowTaskList from "./component/ShowTaskList";
import Input from "./component/Input";
import { ADD_TASK, TOGGLE_SHOW_DELETED } from "./store";

function App() {
  const [state, dispatch] = useContext(Context);

  const [text, setText] = useState("");

  const handleBlur = (value) => {
    setText(value);
  };

  const addTask = () => {
    dispatch({ type: ADD_TASK, payload: { task: text, deleted: false } });
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "250px",
      }}
    >
      <div id="container">
        <h1>To do list </h1>
        <div id="addItem" style={{ marginBottom: "25px" }}>
          <Input handleBlur={handleBlur} initialValue={text} />
          <Button value="Aggiungi" action={addTask} />
          <Button
            value={
              state.showDeleted ? "Nascondi eliminati" : "Mostra eliminati"
            }
            action={() => dispatch({ type: TOGGLE_SHOW_DELETED })}
          />
        </div>
        <ShowTaskList />
      </div>
    </div>
  );
}

export default App;
