import React from "react";
import uuidv4 from "../helper/uuid";

const TaskContext = React.createContext();
const TaskContextSetState = React.createContext();

function TaskProvider({ children }) {
  const [task, setTask] = React.useState([]);
  return (
    <TaskContext.Provider value={task}>
      <TaskContextSetState.Provider value={setTask}>
        {children}
      </TaskContextSetState.Provider>
    </TaskContext.Provider>
  );
}

function useTaskState() {
  return React.useContext(TaskContext);
}

function useTaskSetState() {
  return React.useContext(TaskContextSetState);
}
function useTaskActions() {
  const setTask = useTaskSetState();
  const tempData = useTaskState();
  const addNewTask = (newTask) => {
    let data = [...tempData, newTask];
    setTask(data);
  };

  return { addNewTask };
}

export { useTaskState, useTaskSetState, useTaskActions };
export default TaskProvider;
