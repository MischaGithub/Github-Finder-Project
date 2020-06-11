// Imported file
import React from "react";

// If a user should search a page that is not within the app
// It should return a not found page
const NotFound = () => {
  return (
    <div>
      <h1 className="fas fa-ban">Not Found</h1>
      <p className="lead">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
