import React from "react";
import PropTypes from "prop-types";

// Using the Destructuring method
const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        // Pulling the image from the state
        src={avatar_url}
        alt=" "
        className="round-img"
        style={{ width: "100px" }}
      />
      <h3>{login}</h3>

      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          View More
        </a>
      </div>
    </div>
  );
};

// Creating a UserItems Proptypes
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
