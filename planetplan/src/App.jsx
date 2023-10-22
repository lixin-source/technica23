//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'planetplan/bootswatch/lux/bootstrap.min.css';
import NavBar from './components/NavBar';

function App() {

  return (
    // Home page
    <div id='home'>
      <NavBar />
      {/* Personal todo */}
      <div className="todo-section">
        {/* Fetch from database and show user's tasks that aren't completed */}
      </div>

      {/* Fetch people with highest tasks completed as a whole, "greenest thumb" */}
      <div className="leaderboard">
      </div>

      {/* fetch from user DB and display everything */}
      <div className="all-users">
      </div>  

    </div>
  )
}

export default App;
