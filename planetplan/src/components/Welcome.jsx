import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div>
            <h1>Welcome to Planet Plan!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laboriosam nisi eaque sit soluta laborum labore enim dolores facere excepturi.</p>
            <button><Link to={'/login'}>Login</Link></button>
        </div>
    );
};

export default Welcome;