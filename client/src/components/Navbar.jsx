import React from 'react';
import './Navbar.css'; 
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Dropdown, } from 'flowbite-react';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';


const Navbar = () => {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <>
    <nav>
      <div className="logo"><Link to="/">Zonix</Link></div>

      <div className="search-bar"> 
      <form className='search-form' onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." value={searchTerm}   onChange={(e) => setSearchTerm(e.target.value)} />
      </form>
      </div>
      <div className="search-button">
      <button onClick={handleSubmit}>Search</button>
      </div>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
      
      {currentUser ? (
            <Dropdown
            arrowIcon={false}
            inline
            label={
             
              <img alt='user' className='profile-pic' src={currentUser.profilePicture} />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout} >Sign out</Dropdown.Item>
          </Dropdown>
       ) : 
      (
      <button className="signin-button"><Link to="/sign-in">SignIn</Link></button> 
        )
      }

    </nav> 
    <div className="options">
       <ul className="menu2">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
      </div>
    </>
  );
}

export default Navbar;
