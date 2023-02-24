//creo reducer vuoto
//ogni azione salvo variabile stringa

export const initialState = {
  taskList: [],
  indexToEdit: -1,
  showDeleted: false,
};

export const ADD_TASK = "addTask";
export const DELETE_TASK = "deleteTask";
export const SET_INDEX_TO_EDIT = "indexToEdit";
export const DISCARD_TASK = "discardTask";
export const SAVE_EDIT_TASK = "saveEditTask";
export const TOGGLE_SHOW_DELETED = "toggleDelete";
export const RESTORE_TASK = "restoreTask";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };
    case DELETE_TASK:
      const newTaskList = state.taskList.map((curr, index) => {
        return index === action.payload ? { ...curr, deleted: true } : curr;
      });
      return {
        ...state,
        taskList: newTaskList,
      };
    case SET_INDEX_TO_EDIT:
      return {
        ...state,
        indexToEdit: action.payload,
      };
    case DISCARD_TASK:
      return {
        ...state,
        indexToEdit: -1,
      };
    case SAVE_EDIT_TASK:
      const newTaskListEdited = state.taskList.map((curr, index) => {
        return index === state.indexToEdit
          ? { ...curr, task: action.payload }
          : curr;
      });

      return {
        ...state,
        indexToEdit: -1,
        taskList: newTaskListEdited,
      };
    case TOGGLE_SHOW_DELETED:
      return {
        ...state,
        showDeleted: !state.showDeleted,
      };
    case RESTORE_TASK:
      const restoreTask = state.taskList.map((curr, index) => {
        return index === action.payload ? { ...curr, deleted: false } : curr;
      });

      return {
        ...state,
        taskList: restoreTask,
      };
    default:
      return state;
  }
};

export default reducer;
