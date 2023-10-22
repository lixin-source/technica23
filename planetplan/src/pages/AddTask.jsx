import React, { useState, useEffect } from "react";
import axios from "axios";
// import Task from "./Task";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import TaskList from "../components/TaskList";

function AddTask() {

  return (
    <div className="tasks-page">
      <h3>Add Task</h3>
      <h6>Choose a Task</h6>
      <TaskList />
      <Link to="/"> {/* Assuming you have a route for the home page */}
        <button>Go Back Home</button>
      </Link>
    </div>
  );
  
}

export default AddTask;
