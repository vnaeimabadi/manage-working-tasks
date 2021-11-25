import React from "react";

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

  const editTask = (taskId, editedData) => {
    let allData = tempData;

    let updatedData = allData.map((data) => {
      if (data.id === taskId) {
        data.title = editedData.title;
        data.description = editedData.description;
        data.status = editedData.status;
      }
      return data;
    });
    setTask(updatedData);
  };

  return { addNewTask, editTask };
}

export { useTaskState, useTaskSetState, useTaskActions };
export default TaskProvider;
