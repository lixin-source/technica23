import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client'; // Import your Supabase client instance

const Task = ({ task }) => {
  const [isAdded, setIsAdded] = useState(false);

  const addTask = async () => {
    try {
      // Insert the task into the user's "no_completed" list in the Supabase database.
      const { data, error } = await supabase
        .from('users')
        .update({ no_completed: [...task.id] }) // Replace this with the correct column name

      if (error) {
        console.error('Error opening task:', error);
        return;
      }

      // Set the state to indicate that the task has been added.
      setIsAdded(true);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="task">
      <p>{task.title}</p>
      <Link to={`/taskDetail/${task.id}`} className="task-title">
        ...
      </Link>

      {/* Render a button conditionally based on whether the task has been added */}
      {!isAdded ? (
        <button onClick={addTask}>+</button>
      ) : (
        <span>Task Added</span>
      )}
    </div>
  );
};

export default Task;
