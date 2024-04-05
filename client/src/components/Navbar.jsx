import React from 'react';
import './Navbar.css'; 
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Dropdown, } from 'flowbite-react';


const Navbar = () => {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
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
  return (
    <>
    <nav>
      <div className="logo"><Link to="/">Zonix</Link></div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="search-button">
      <button>Search</button>
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
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
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
