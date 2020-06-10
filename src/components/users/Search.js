import React, { useState } from "react";
import PropTypes from "prop-types";

// Converted a  Search class to a functional component and using the useState Hook
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState("");

  // On Submit method
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a name or username", "light");
    } else {
      searchUsers(text);
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
      {showClear && (
        // THE CLEAR BUTTON
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
