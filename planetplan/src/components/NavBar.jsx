// Router installation for links
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      {/* Whole NavBar/Header */}
      <nav className="navbar">
        <ul>
          {/* To Home */}
          <li className="home-link" key="home-button">
            <Link to="/">
              PlanetPlan
            </Link>
          </li>
          {/* When user is not logged in, shows login & sign up routes */}
          <li className="login-ink" key="login-button">
            <Link to="/login">
              Login | 
            </Link>
          </li>
          <li className="signup-ink" key="signup-button">
            <Link to="/signup">
              Sign Up
            </Link>
          </li>
          {/* When user is logged in, shows user profile route AKA detailed view of user */}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;