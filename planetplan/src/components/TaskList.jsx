import { useState, useEffect } from "react";
import axios from "axios";

function TaskList() {
    const [fullTasks, setFullTasks] = useState([]);
    
useEffect(() => {
  async function fetchAllTasks() {
        const { data } = await axios.get("/data/Tasks");
        setFullTasks(data);
        }
  fetchAllTasks();
}, [id]);
  return (
    <div className="tasks">
        {fullTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
  )
}
export default TaskList;