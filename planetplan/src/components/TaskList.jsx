import { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";

function TaskList() {
    const [fullTasks, setFullTasks] = useState([]);
    
    // upon component load, displays all tasks from Tasks API in order to have user see tasks they can do
    useEffect(() => {
    async function fetchAllTasks() {
        const { data } = await axios.get("../../data/Tasks");
        setFullTasks(data);
        console.log(data)
        }
      fetchAllTasks();
    }, []);

  return (
    <div className="tasks-page">
      <h3>Start Change</h3>
      <h6>Choose a Task</h6>
    <div className="tasks">
      {/* Display all tasks that user can choose from */}
        {fullTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
        </div>
      </div>
  )
}
export default TaskList;