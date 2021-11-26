import React from "react";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import TaskList from "./components/tasks/TaskList";
import { useTaskActions } from "./providers/TaskProvider";

const App = () => {
  const { restoreTasks } = useTaskActions();
  React.useEffect(() => {
    restoreTasks();
  }, []);
  return (
    <div>
      <Header>Home</Header>
      <NewTask style={{ marginBottom: "1.5rem" }} />
      <TaskList />
    </div>
  );
};

export default App;
