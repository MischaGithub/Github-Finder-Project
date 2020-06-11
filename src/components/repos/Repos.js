// Imported files
import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

// Creating a Repo Function to loop through all the repos
const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};

// Creating the PropTypes for Repos
Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
