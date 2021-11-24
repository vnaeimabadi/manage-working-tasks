import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const SingleTask = ({ data }) => {
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
        <span>
          <FontAwesomeIcon icon={faEdit} />
        </span>
      </section>
    </div>
  );
};

export default SingleTask;
