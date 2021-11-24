import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewTask = () => {
  return (
    <div className="section-center">
      <div className="new-task">
        <h1>Add a new Task</h1>
        <input placeholder="Title" className="new-task-title" />
        <textarea placeholder="Description" className="new-task-description" />
        <button className="btn btn-new-task">
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
