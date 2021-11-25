import React, { Fragment } from "react";
import SingleTask from "./SingleTask";
import { useTaskState } from "../../providers/TaskProvider";

const TaskList = () => {
  const tasks = useTaskState();

  return (
    <div className="task-list">
      <section className="section-center task-list-title ">
        <h1>Tasks</h1>
      </section>
      <section className="tasks">
        {tasks && tasks.length > 0 ? (
          <div className="section-center single-task">
            {tasks.map((data, index) => (
              <Fragment key={data.id}>
                <SingleTask data={data} />
              </Fragment>
            ))}
          </div>
        ) : (
          <div className="empty-task">
            <p>
              You have nothing to do.
              <br />
              Go get some sleep
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default TaskList;
