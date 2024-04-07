import { useSelector } from "react-redux";
import { Alert, Button, Modal, ModalBody, TextInput } from 'flowbite-react';
import "./Profile.css";
export default function DashProfile() {
  const { currentUser, error, loading } = useSelector((state) => state.user);
  return (
    <div className='other-allignment'>
    <div className="profile-tab">
      <h1 className="title">Profile</h1>
      <form className="profile-form">
        <img src={currentUser.profilePicture} alt="avatar" className="userAvatar" />
        <input className="profile-input" type="text" id="username" placeholder="username" defaultValue={currentUser.username}/>
        <input className="profile-input" type="email" id="email" placeholder="email" defaultValue={currentUser.email}/>
        <input className="profile-input" type="password" id="password" placeholder="password"/>
        <button type="submit" id="profile-button" >Update</button>
      </form>
      <div className="del-out">
        <span className='cursor-pointer delete-button'>
          Delete Account
        </span>
        <span className='cursor-pointer out-button'>
          Sign Out
        </span>
      </div>
    </div>
    </div>
  )
}
