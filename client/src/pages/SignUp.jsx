import "./SignupPage.css";
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import OAuth from "../components/OAuth";


const SignupPage = () => {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            return setErrorMessage('Please fill out all fields.');
          } 
        try {
            setLoading(true);
            setErrorMessage(null);
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
                return setErrorMessage(data.message);
              }
              setLoading(false);
              if(res.ok) {
                navigate('/sign-in');
              } 
        }catch (error){
            setErrorMessage(error.message);
            setLoading(false);
        }
    };

  return (
    <div id="allignment-container">
<div id="signup-container">
    <div className="signup-logo">
        <img src="logo.png" alt="Logo" />
    </div>
    <div className="signup-text">
        <h2>Welcome to our website!</h2>
    </div>
    <div className="signup-form-container">
    <form className="signup-form" action="#" method="post" onSubmit={handleSubmit}>
        <input type="string" className="signup-input" id="username" name="username" placeholder="Username" required onChange={handleChange}/>
        <input type="email" id="email"  className="signup-input" name="email" placeholder="Email" required onChange={handleChange}/>
        <input type="password" className="signup-input" placeholder="Password" id="password" onChange={handleChange}/>
        <button type="submit" className="signup-button" id="signup-button" disabled={loading}>
        {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
            </button>
    </form>
    </div>
    <div className="OAuth">
        <OAuth />
        </div>
    <div className="signup-signin-link">
        <p>Already have an account? <Link to="/sign-in">SignIn</Link></p>
    </div>
    <div>
    {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}  
    </div>
</div>
    </div>
    
  );
};

export default SignupPage;
