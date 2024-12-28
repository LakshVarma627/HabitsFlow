import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <div className="profile-info">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Member Since:</strong> January 2023</p>
      </div>
    </div>
  );
};

export default Profile;