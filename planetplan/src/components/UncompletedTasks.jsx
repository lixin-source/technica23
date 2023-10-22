import { useEffect, useState } from 'react';
import { supabase } from '../client'; // Import your Supabase client

function UncompletedTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchUncompletedTasks() {
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('is_completed', false); // Filter uncompleted tasks

      if (error) {
        console.error('Error fetching uncompleted tasks:', error);
      } else {
        setTasks(data);
      }
    }

    fetchUncompletedTasks();
  }, []);

  const markCompleted = async (taskId) => {
    // Update the task's "is_completed" status to true
    const { error } = await supabase
      .from('tasks')
      .update({ is_completed: true })
      .eq('id', taskId);

    if (error) {
      console.error('Error marking task as completed:', error);
    } else {
      // After marking the task as completed, re-fetch uncompleted tasks
      fetchUncompletedTasks();
    }
  };

  return (
    <div>
      <h2>Uncompleted Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.task_name}
            <button onClick={() => markCompleted(task.id)}>Mark Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UncompletedTasks;
