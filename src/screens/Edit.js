import React from "react";
import { useLocation } from "react-router-dom";
import EditTask from "../components/EditTask";
import Header from "../components/Header";

const Edit = () => {
  const { state } = useLocation();
  const { singleData } = state;
  return (
    <div>
      <Header>Edit</Header>
      <EditTask selectedTask={singleData} />
    </div>
  );
};

export default Edit;
