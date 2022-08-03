import React from "react";
import img from "./images/illustration-working.svg";

const Section1 = () => {
  return (
    <div>
      <div className="flexx">
        <img className="illustrate" src={img} alt="" />
        <div className="diva">
          <h1 className="more">More than just shorter links</h1>
          <p className="build">
            Build a brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn1">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
