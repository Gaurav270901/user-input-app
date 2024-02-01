// src/components/UserDataPage.js
import React from 'react';
//write paragraph

const UserDataPage = ({ userData }) => {
  return (
    <div>
      <h2>User Data Page</h2>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      <p>Address: {userData.address}</p>
      <p>Phone: {userData.phone}</p>
    </div>
  );
};

export default UserDataPage;
