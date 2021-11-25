import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useTaskActions } from "../providers/TaskProvider";
import { useNavigate } from "react-router-dom";

const EditTask = ({ style, selectedTask }) => {
  const navigate = useNavigate();
  const { editTask } = useTaskActions();
  const [title, setTitle] = useState(selectedTask.title);
  const [description, setDescription] = useState(selectedTask.description);
  const [status, setStatus] = useState(selectedTask.status);
  const [activeButton, setActiveButton] = useState(false);
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeStatus = (e) => {
    const value = e.target.value;
    setStatus(value);
  };
  const editSingleTaskHandler = () => {
    let editedTask = {
      id: selectedTask.id,
      title: title,
      description: description,
      status: status,
    };
    editTask(selectedTask.id, editedTask);
    navigate(-1);
  };

  const updateActiveButton = React.useCallback(() => {
    if (title.trim().length > 0 && description.trim().length > 0) {
      if (!activeButton) setActiveButton(true);
    } else {
      if (activeButton) setActiveButton(false);
    }
  }, [title, description, activeButton]);

  React.useEffect(() => {
    updateActiveButton();
  }, [title, description, updateActiveButton]);

  return (
    <div className="section-center" style={style}>
      <div className="edit-task">
        <h1>Edit Task</h1>
        <input
          placeholder="Title"
          className="edit-task-title"
          value={title}
          onChange={changeTitle}
        />
        <textarea
          placeholder="Description"
          className="edit-task-description"
          value={description}
          onChange={changeDescription}
        />
        <select
          className="edit-task-selector"
          value={status}
          onChange={handleChangeStatus}
        >
          <option value="inQA">inQA</option>
          <option value="done">Done</option>
          <option value="todo">Todo</option>
          <option value="inProgress">inProgress</option>
        </select>
        <div className="edit-task-buttons">
          <button
            disabled={activeButton === true ? false : true}
            className="btn btn-edit-task"
            onClick={editSingleTaskHandler}
          >
            <span className="btn-new-task-icon">
              <FontAwesomeIcon icon={faEdit} />
            </span>
            <span>edit</span>
          </button>
          <button
            disabled={activeButton === true ? false : true}
            className="btn btn-edit-task btn-edit-task-cancel"
            onClick={() => {
              navigate(-1);
            }}
          >
            <span>cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
