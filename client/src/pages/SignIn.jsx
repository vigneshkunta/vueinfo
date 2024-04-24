import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() { 
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div id="allignment-container">
    <div id="signup-container">
        <div className="signup-logo">
            <div className="logo"><Link to="/">Zonix</Link></div>
        </div>
        <div className="signup-text">
            <h2>Login to continue</h2>
        </div>
        <div className="signup-form-container">
        <form className="signup-form" action="#" method="post" onSubmit={handleSubmit}>
            <input type="email" id="email"  className="signup-input" name="email" placeholder="Email" required onChange={handleChange}/>
            <input type="password" className="signup-input" placeholder="********" id="password" onChange={handleChange} />
            <button type="submit" className="signup-button" id="signup-button"   disabled={loading} > 
            {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
            </button>
        </form>
        </div>
        <div className='OAuth'>
        <OAuth />
        </div>
        <div className="signup-signin-link">
            <p>Don't have an account? <Link to="/sign-up">SignUp</Link></p>
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
  )
}

