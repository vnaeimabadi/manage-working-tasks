import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useTaskSetState, useTaskState } from "../providers/TaskProvider";
import uuidv4 from "../helper/uuid";

const NewTask = ({ style }) => {
  const setTask = useTaskSetState();
  const tempData = useTaskState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeDescription = (e) => {
    setDescription(e.target.value);
  };
  const addNewTaskHandler = () => {
    let data = [
      ...tempData,
      {
        id: uuidv4(),
        title: title,
        description: description,
        status: "todo",
      },
    ];
    setTask(data);
    setTitle("");
    setDescription("");
  };
  return (
    <div className="section-center" style={style}>
      <div className="new-task">
        <h1>Add a new Task</h1>
        <input
          placeholder="Title"
          className="new-task-title"
          value={title}
          onChange={changeTitle}
        />
        <textarea
          placeholder="Description"
          className="new-task-description"
          value={description}
          onChange={changeDescription}
        />
        <button className="btn btn-new-task" onClick={addNewTaskHandler}>
          <span>
            <FontAwesomeIcon icon={faPlus} />
          </span>
          Add
        </button>
      </div>
    </div>
  );
};

export default NewTask;
