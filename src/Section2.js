import React from "react";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="holder">
        <input
          className="place"
          type="text"
          placeholder="Shorten a link here..."
        />
        <button className="short">Shorten it!</button>
      </div>
      <div className="tracker">
        <h1 className="stat">Advanced Statistics</h1>
        <p className="track">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
    </div>
  );
};

export default Section2;
