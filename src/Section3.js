import React from "react";
import brand from "./images/icon-brand-recognition.svg";
import detailed from "./images/icon-detailed-records.svg";
import customize from "./images/icon-fully-customizable.svg";

const Section3 = () => {
  return (
    <div>
      <div className="floor">
        <div className="join">
          <div className="records">
            <img className="brands" src={brand} alt="" />
            <h1 className="hey">Brand Recognition</h1>
            <p className="boost">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="recordss">
            <img className="brandss" src={detailed} alt="" />
            <h1 className="hey">Detailed Records</h1>
            <p className="boost">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="recordsss">
            <img className="brandsss" src={customize} alt="" />
            <h1 className="hey">Fully Customizable</h1>
            <p className="boost">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
        <div className="booster">
          <h1 className="links">Boost your links today</h1>
          <button className="get">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
