import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< Updated upstream
=======
import '../node_modules/bootswatch/dist/minty/bootstrap.min.css';
import NavBar from './components/NavBar';
>>>>>>> Stashed changes

import Task from './components/Task';
import UserFeed from './components/UserFeed';
import TopUsers from './components/TopUsers';

function App() {

  const [tasks, setTasks] = useState([]);
  const [topUsers, setTopUsers] = useState([]);
  const [feedData, setFeedData] = useState([]);

  // Function to fetch and set the tasks
  const fetchTasks = async () => {
    try {
      // Fetch tasks from your database (replace 'tasks' with your actual table name)
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('is_completed', false); // Replace this with your condition for uncompleted tasks

      if (error) {
        console.error('Error fetching tasks:', error);
        return;
      }

      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  //Function to fetch top users 
  const fetchTopUsers = async () => {
    try {
      // Fetch top users from your database
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .order('completed', { ascending: false })
        .limit(10);

      if (error) {
        console.error('Error fetching top users:', error);
        return;
      }

      setTopUsers(data);
    } catch (error) {
      console.error('Error fetching top users:', error);
    }
  };

  // Function to fetch and set the user feed data
  const fetchFeedData = async () => {
    try {
      const response = await fetch('https://data/users/feed-data'); // Replace with your API endpoint
      if (response.ok) {
        const data = await response.json();
        setFeedData(data);
      } else {
        console.error('Error retrieving data:', response.status);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchTopUsers();
    fetchFeedData();
  }, []);

  return (
<<<<<<< Updated upstream
    <div>
      <h1>Vite + React</h1>
      <div className="card">
        
      </div>
      <p className="read-the-docs">
        
      </p>
=======
    // Home page
    <div id='home'>
      <NavBar />
      {/* Personal todo */}
      <div className="todo-section">
        {/* Fetch from database and show user's tasks that aren't completed */}
        {tasks.mzp(task=>(
          <Task key={task.id} task={task} />
        ))}
      </div>

      {/* Fetch people with highest tasks completed as a whole, "greenest thumb" */}
      <div className="leaderboard">
        <TopUsers topUsers={topUsers} />
      </div>

      {/* fetch from user DB and display everything */}
      <div className="all-users">
        <UserFeed feedData={feedData} />
      </div>  

>>>>>>> Stashed changes
    </div>
  )
}

export default App
