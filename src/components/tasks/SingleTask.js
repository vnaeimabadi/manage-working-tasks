import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTaskActions } from "../../providers/TaskProvider";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const SingleTask = ({ data }) => {
  let navigate = useNavigate();

  return (
    <div className="single-task-item">
      <section className="single-task-item-title">
        <h1>{data.title}</h1>
      </section>
      <section className="single-task-item-description">
        <p>{data.description}</p>
      </section>
      <section className="single-task-item-footer">
        <button className="btn btn-single-task-item">{data.status}</button>
        <span
          onClick={() => {
            navigate("/edit", { state: { singleData: data } });
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </span>
      </section>
    </div>
  );
};

export default SingleTask;
