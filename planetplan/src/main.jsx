// Pages
import App from './App.jsx'
import NavBar from './routes/NavBar';
import Login from "./pages/Login.page.js";
import Signup from "./pages/Signup.page.js";
import PrivateRoute from "./pages/PrivateRoute.page.js";
import { UserProvider } from "./pages/user.context.js";
// import UserProfile from './routes/UserProfile'

import './index.css'

// Route installations
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <Routes>
        {/* NavBar */}
        <Route path="/" element={<NavBar />}/>
        {/* Home Page */}
        <Route index={true} path="home" element={<App />} />
        {/* Sign Up Page */}
        <Route exact path="/signup" element={<Signup />} />
        {/* Log In page  */}
        <Route exact path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>

        </Route>
        {/* User Profile */}
        {/* <Route index={false} element={UserProfile} /> */}
      </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
