import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const { data: user, error } = await supabase
        .from('users')
        .insert([
          {
            email,
            password,
            fullname,
          },
        ]);

      if (error) {
        console.error('Sign up error:', error.message);
        return;
      }

      setIsSignUpSuccessful(true);
      console.log('Sign up successful. User:', user);
    } catch (error) {
      console.error('General error:', error);
    }
  };

  // Automatically navigate back to the home page after a delay
  useEffect(() => {
    if (isSignUpSuccessful) {
      const timeoutId = setTimeout(() => {
        navigate('/home');
      }, 3000); // Change 3000 to the desired delay in milliseconds
      return () => clearTimeout(timeoutId);
    }
  }, [isSignUpSuccessful, navigate]);

  return (
    <div>
      <h2>Sign Up</h2>
      {isSignUpSuccessful && (
        <div className="success-message">Sign up successful. Redirecting to home...</div>
      )}
      {!isSignUpSuccessful && (
        <div>
          <input
            type="Fullname"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default SignUp;
