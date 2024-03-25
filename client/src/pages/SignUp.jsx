import "./SignupPage.css";
import { Link } from 'react-router-dom';
import { useState } from "react";


const SignupPage = () => {
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(formData),
            });
            const data = await res.json();
        }catch (error){}
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
        <button type="submit" className="signup-button" id="signup-button">Sign Up</button>
    </form>
    </div>
    <div className="signup-signin-link">
        <p>Already have an account? <Link to="/sign-in">SignIn</Link></p>
    </div>
</div>
    </div>
    
  );
};

export default SignupPage;
