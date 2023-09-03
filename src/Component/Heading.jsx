import React from "react";
import slice from "../assests/slice.svg";
const Heading = () => {
  return (
    <div className="header shadow-sm border border-bottom-2 row row-cols-12 p-1 justify-content-evenly align-items-baseline">
      <div className="logo col col-3">
        <img src={slice} alt="Slice Foods" />
      </div>
      <div className="app-title col col-3 pe-cursor">HungryBites</div>
      <div className="nav-items col col-3">
        <ul className="p-0 mx-0 align-itmes-center row row-cols-12 justify-content-between">
          <li className="col-auto">
            <a
              href="#about"
              className="fw-semibold text-decoration-none pe-counter"
            >
              About
            </a>
          </li>
          <li className="col-auto">
            <a
              href="#about"
              className="fw-semibold  text-decoration-none pe-counter"
            >
              Share your recipe
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
