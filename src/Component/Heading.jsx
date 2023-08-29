import React from "react";
import slice from "../assests/slice.svg";
const Heading = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={slice} alt="Slice Foods" />
      </div>
      <div className="app-title">Hungry Burgers</div>
      <div className="nav-items">
        <ul>
          <li>About</li>
          <li>Share your recipe</li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
