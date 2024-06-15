import React from "react";
import { useLocation } from "react-router-dom";

const UserDetail = () => {
  const location = useLocation();
  console.log(location);
  const user = location.state?.user;

  if (!user) {
    return <div>No user data available.</div>;
  }
  console.log(user);
  return (
    <div>
      <h1>User Details</h1>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>First Name:</strong> {user.first_name}
      </p>
      <p>
        <strong>Last Name:</strong> {user.last_name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        width="100"
      />
    </div>
  );
};

export default UserDetail;
