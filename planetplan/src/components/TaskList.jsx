import React, { useState, useEffect } from "react";
import Task from "./Task";
import tasksData from "../data/Tasks"; // Import the default export

function TaskList() {
  const [fullTasks, setFullTasks] = useState([]);

  useEffect(() => {
    setFullTasks(tasksData);
  }, []);

  return (
    <div className="tasks">
      {Array.isArray(fullTasks) ? (
        fullTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}

export default TaskList;
