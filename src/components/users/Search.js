import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

// Converted a  Search class to a functional component and using the useState Hook
const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  // On Submit method
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a name or username", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  // Allowing the search bar to take input
  // With an event parameter

  const onChange = (e) => setText(e.target.value);

  return (
    // Creating a Search bar for the users to be serach based on their name
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        // THE CLEAR BUTTON
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
