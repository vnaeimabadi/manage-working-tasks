import React, { Fragment } from "react";
import SingleTask from "./SingleTask";
import { useTaskState } from "../../providers/TaskProvider";

const TaskList = () => {
  const tasks = useTaskState();

  let newTask = tasks.filter((data, index) => {
    return data.status !== "deployed";
  });

  return (
    <div className="task-list">
      <section className="section-center task-list-title ">
        <h1>Tasks</h1>
      </section>
      <section className="tasks">
        {newTask && newTask.length > 0 ? (
          <div className="single-task">
            {newTask.map((data) => (
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
