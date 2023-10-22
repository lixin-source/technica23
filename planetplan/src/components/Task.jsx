import { useState } from 'react';
import '../App.css'
import { Link } from 'react-router-dom'


// Task generated from API will be displayed with this component
const Task = (task) =>  {

    const addTask = async (event) => {
        // event.preventDefault();

        // // from user database, insert the task
        // await supabase
        //     .from('')
        //     .insert({title: task.title, 
        //         image_task: task.image_task, 
        //         description: task.description})
        //     .select();

        //     // Instead of home, go to profile
        //     window.location = "/";
        // if (error) {
        //   console.log(error);
        // } else {
        //   console.log(data);
        // }
    }

  return (
      <div className="task">
        <p>{task.title}</p>
          <Link to={`/taskDetail/${task.id}`} key={task.id} className='title'>...</Link>
          {/* add task to user's list of tasks */}

          {/* NEED USER DATABASE TO ADD */}
        <button onSubmit={addTask}> + </button>
      </div>
  );
};


export default Task;