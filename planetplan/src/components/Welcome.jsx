import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div>
            <h1>Welcome to Planet Plan!</h1>
            <p>
                Users will be able to recieve tasks at random and will be able to complete it within 24hrs. 
                Finish as much as you can to be on the leaderboards!
                <br/>
                Sign Up and become a member. Already a member? Login in !
            </p>
            {/* <button><Link to={'/login'}>Login</Link></button> */}
        </div>
    );
};

export default Welcome;