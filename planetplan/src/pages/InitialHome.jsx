import Welcome from "../components/Welcome";
import { Link } from 'react-router-dom'


function InitialHome() {

  return (
    <div>
          <Welcome />
          <div className="d-flex justify-content-around">
            <Link to={`/login`}>Login</Link>
            <Link to={`/signup`}>Sign Up</Link>
          </div>
    </div>
  )
}

export default InitialHome