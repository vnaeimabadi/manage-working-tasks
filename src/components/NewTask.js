import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useTaskActions } from "../providers/TaskProvider";
import uuidv4 from "../helper/uuid";

const NewTask = ({ style }) => {
  const { addNewTask } = useTaskActions();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [activeButton, setActiveButton] = useState(false);
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeDescription = (e) => {
    setDescription(e.target.value);
  };
  const addNewTaskHandler = () => {
    let data = {
      id: uuidv4(),
      title: title,
      description: description,
      status: "todo",
    };
    addNewTask(data);
    setTitle("");
    setDescription("");
  };

  React.useEffect(() => {
    if (title.trim().length > 0 && description.trim().length > 0) {
      if (!activeButton) setActiveButton(true);
    } else {
      if (activeButton) setActiveButton(false);
    }
  }, [title, description]);
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
        <button
          disabled={activeButton === true ? false : true}
          className="btn btn-new-task"
          onClick={addNewTaskHandler}
        >
          <span className="btn-new-task-icon">
            <FontAwesomeIcon icon={faPlus} />
          </span>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
};

export default NewTask;
