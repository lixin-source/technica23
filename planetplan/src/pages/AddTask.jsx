import { Link } from "react-router-dom";
import TaskList from "../components/TaskList";

function AddTask() {

  return (
    <div className="tasks-page">
      <h3>Add Task</h3>
      <h6>Choose a Task</h6>
      <TaskList />
      <Link to="/">
        <button>Go Back Home</button>
      </Link>
    </div>
  );
  
}

export default AddTask;
