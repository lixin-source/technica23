// Pages
import App from './App.jsx'
import NavBar from './routes/NavBar';
import Login from "./routes/Login";
import Signup from "./routes/SignUp";
import PrivateRoute from "./pages/PrivateRoute.page.jxs";
import { UserProvider } from "./pages/User.Context.jxs";
import TaskDetails from "./routes/TaskDetails.jsx"
// import UserProfile from './routes/UserProfile'

import './index.css'

// Route installations
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

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
        {/* Task Detail page */}
        <Route index={false} path='/taskDetail/:id' element={<TaskDetails/>}/>
        <Route element={<PrivateRoute />}>

        </Route>
        {/* User Profile */}
        {/* <Route index={false} element={UserProfile} /> */}
      </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
