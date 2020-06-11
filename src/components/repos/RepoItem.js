// Import the proptypes for the repo items
import React from "react";
import PropTypes from "prop-types";

// Repo Items is a card and if clicked on the repo name it will take user to the repo on github
const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

// RepoItem PropTypes
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
