import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() { 
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage('Please fill all the fields');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate('/');
      }
    } catch (error) {
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
            <h2>Login to continue</h2>
        </div>
        <div className="signup-form-container">
        <form className="signup-form" action="#" method="post" onSubmit={handleSubmit}>
            <input type="email" id="email"  className="signup-input" name="email" placeholder="Email" required onChange={handleChange}/>
            <input type="password" className="signup-input" placeholder="********" id="password" onChange={handleChange} />
            <button type="submit" className="signup-button" id="signup-button">Sign In</button>
        </form>
        </div>
        <div className="signup-signin-link">
            <p>Don't have an account? <Link to="/sign-up">SignUp</Link></p>
        </div>
    </div>
        </div>
  )
}

