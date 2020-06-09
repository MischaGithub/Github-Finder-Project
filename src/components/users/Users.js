import React from "react";
import UserItem from "./UserItem";
// Importing the Spinner
import Spinner from "../layout/Spinner";
// Importing PropTypes
import PropTypes from "prop-types";

// Change Users to a functional component
// Destructing it to only pull out users and loading
const Users = ({ users, loading }) => {
  // If statement
  if (loading) {
    return <Spinner />;
  } else {
    // Looping through the users
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

// Style the user profile to the grid style
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
