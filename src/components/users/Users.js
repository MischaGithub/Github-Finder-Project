import React, { useContext } from "react";
import UserItem from "./UserItem";
// Importing the Spinner
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

// Change Users to a functional component
const Users = () => {
  // Initializing githubContext
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;
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

// Style the user profile to the grid style
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
