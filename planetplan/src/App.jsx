import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootswatch/dist/minty/bootstrap.min.css';
import { supabase } from './client.js';

import NavBar from './components/NavBar';
import Task from './components/Task';
import UserFeed from './components/UserFeed';
import TopUsers from './components/TopUsers';
import UncompletedTasks from './components/UncompletedTasks';


function App() {

  // const [tasks, setTasks] = useState([]);
  // const [topUsers, setTopUsers] = useState([]);
  // const [feedData, setFeedData] = useState([]);

  // // Function to fetch and set the tasks
  // const fetchTasks = async () => {
  //   try {
  //     // Fetch tasks from your database (replace 'tasks' with your actual table name)
  //     const { data, error } = await supabase
  //       .from('tasks')
  //       .select('*')
  //       .eq('uncompleted'); // Replace this with your condition for uncompleted tasks

  //     if (error) {
  //       console.error('Error fetching tasks:', error);
  //       return;
  //     }

  //     setTasks(data);
  //   } catch (error) {
  //     console.error('Error fetching tasks:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  // //Function to fetch top users 
  // const fetchTopUsers = async () => {
  //   try {
  //     // Fetch top users from your database
  //     const { data, error } = await supabase
  //       .from('users')
  //       .select('*')
  //       .order('completed', { ascending: false })
  //       .limit(10);

  //     if (error) {
  //       console.error('Error fetching top users:', error);
  //       return;
  //     }

  //     setTopUsers(data);
  //   } catch (error) {
  //     console.error('Error fetching top users:', error);
  //   }
  // };

  // // Function to fetch and set the user feed data
  // const fetchFeedData = async () => {
  //   try {
  //     const response = await fetch(''); // Replace with your API endpoint
  //     if (response.ok) {
  //       const data = await response.json();
  //       setFeedData(data);
  //     } else {
  //       console.error('Error retrieving data:', response.status);
  //     }
  //   } catch (error) {
  //     console.error('Error retrieving data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchTasks();
  //   fetchTopUsers();
  //   fetchFeedData();
  // }, []);
const dummyID = 5;

  return (
    <div>
    {/* Home Page */}
    <div id='home'>
      <NavBar />
      {/* Personal todo */}
      <div className="todo-section">
        {/* Fetch from database and show user's tasks that aren't completed */}
          <Task />
        <UncompletedTasks key={dummyID} id={dummyID} />
      </div>

      {/* Fetch people with highest tasks completed as a whole, "greenest thumb" */}
       <div className="leaderboard">
        <TopUsers />
      </div> 
      {/* fetch from user DB and display everything */}
     <div className="all-users">
        <UserFeed />
      </div>   
      </div>  
    </div>
  )
}

export default App;
