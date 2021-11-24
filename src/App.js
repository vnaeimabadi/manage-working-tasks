import React from "react";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import TaskList from "./components/tasks/TaskList";

const App = () => {
  return (
    <div>
      <Header>Home</Header>
      <NewTask style={{ marginBottom: "1.5rem" }} />
      <TaskList />
    </div>
  );
};

export default App;
