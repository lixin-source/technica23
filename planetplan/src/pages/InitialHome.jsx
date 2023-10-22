import Welcome from "../components/Welcome";
import { useState } from 'react'
import { Link } from 'react-router-dom'


function InitialHome() {

  return (
    <div>
          <Welcome />
        <Link to={`/login`}>Login</Link>
        <Link to={`/signup`}>Sign Up</Link>
    </div>
  )
}

export default InitialHome