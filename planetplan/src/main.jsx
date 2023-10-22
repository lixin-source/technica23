// Pages
import App from './App.jsx'
//import NavBar from './components/NavBar.jsx';
import Login from "./routes/Login";
import Signup from "./routes/SignUp";
import TaskDetails from "./routes/TaskDetails.jsx"
import InitialHome from './routes/InitialHome.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import UserProfile from './routes/UserProfile'

import './index.css'

// Route installations
import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* NavBar */}
        <Route path="/" element={<InitialHome />}/>
        {/* Initial Home Page before User Login */}
        {/* <Route index={true} path="inithome" element={<InitialHome />} /> */}
        {/* Home pg after login */}
        <Route index={true} path="home" element={<App />} />
        {/* Sign Up Page */}
        <Route exact path="/signup" element={<Signup />} />
        {/* Log In page  */}
        <Route exact path="/login" element={<Login />} />
        {/* Task Detail page */}
        <Route index={false} path='/taskDetail/:id' element={<TaskDetails/>}/>
        {/* <Route element={<PrivateRoute />}> */}

        {/* </Route> */}
        {/* User Profile */}
        {/* <Route index={false} element={UserProfile} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
