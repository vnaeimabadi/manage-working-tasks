import React, { Fragment } from "react";
import SingleTask from "./SingleTask";
let tempData = [
  {
    id: "1",
    title: "title-1",
    description:
      "description-1 and tis is for mean aslda alsdkad xlcjalfc laskdla but you are hear",
    status: "todo",
  },
  {
    id: "2",
    title: "title-2",
    description: "description-2",
    status: "inprogress",
  },
  { id: "3", title: "title-3", description: "description-3", status: "done" },
  {
    id: "4",
    title: "title-4",
    description: "description-4",
    status: "inprogress",
  },
  { id: "5", title: "title-5", description: "description-5", status: "todo" },
];
const TaskList = () => {
  return (
    <div className="task-list">
      <section className="section-center task-list-title ">
        <h1>Tasks</h1>
      </section>
      <section className="tasks">
        {tempData && (
          <div className="section-center single-task">
            {tempData.map((data, index) => (
              <Fragment key={data.id}>
                <SingleTask data={data} />
              </Fragment>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default TaskList;
