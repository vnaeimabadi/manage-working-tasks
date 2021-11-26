import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useTaskActions } from "../providers/TaskProvider";
import { useNavigate } from "react-router-dom";

const allStatus = [
  {
    id: 1,
    supportedId: [1, 4],
    title: "inQA",
    value: "inQA",
  },
  {
    id: 2,
    supportedId: [2, 1],
    title: "Done",
    value: "done",
  },
  {
    id: 3,
    supportedId: [3, 5, 1],
    title: "Todo",
    value: "todo",
  },
  {
    id: 4,
    supportedId: [4, 3],
    title: "inProgress",
    value: "inProgress",
  },
  {
    id: 5,
    supportedId: [5, 4],
    title: "Blocked",
    value: "blocked",
  },
  {
    id: 6,
    supportedId: [2, 6],
    title: "Deployed",
    value: "deployed",
  },
];

const EditTask = ({ style, selectedTask }) => {
  const navigate = useNavigate();
  const { editTask } = useTaskActions();
  const [title, setTitle] = useState(selectedTask.title);
  const [description, setDescription] = useState(selectedTask.description);
  const [status, setStatus] = useState(selectedTask.status);
  const statusIdRef = React.useRef(selectedTask.statusId);
  const [activeButton, setActiveButton] = useState(false);
  const [statusItems, setStatusItems] = useState([]);
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeStatus = (e) => {
    const value = e.target.value;
    let selectedStatusId = allStatus.filter(
      (element) => element.value === value
    )[0].id;

    statusIdRef.current = selectedStatusId;
    setStatus(value);
  };
  const editSingleTaskHandler = () => {
    let editedTask = {
      id: selectedTask.id,
      title: title,
      description: description,
      status: status,
      statusId: statusIdRef.current,
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

  const renderStatus = React.useCallback(() => {
    let temp = allStatus.filter((data) =>
      data.supportedId.some((x) => x === selectedTask.statusId)
    );
    setStatusItems(temp);
  }, [selectedTask]);

  React.useEffect(() => {
    updateActiveButton();
  }, [title, description, updateActiveButton]);

  React.useEffect(() => {
    renderStatus();
  }, [renderStatus]);

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

        {statusItems.length > 0 && (
          <select
            className="edit-task-selector"
            value={status}
            onChange={handleChangeStatus}
          >
            {statusItems.map((element, index) => {
              return (
                <option value={element.value} key={index}>
                  {element.title}
                </option>
              );
            })}
          </select>
        )}
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
