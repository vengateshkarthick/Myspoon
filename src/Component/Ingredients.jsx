import React from "react";
import checkbadge from "../assests/checkbadge.svg";

const Ingredients = ({ details }) => (
  <div className="ing-container p-1 d-flex flex-column align-items-start">
    {details.map((det) => (
      <div
        className={`${
          det.includes("Nil") ? "d-none" : ""
        } ingridients-involved m-1 d-flex gap-2`}
      >
        <div>
          {" "}
          <img className="check px-1" src={checkbadge} alt="check" />
        </div>

        <span className="text-dark">{det}</span>
      </div>
    ))}
  </div>
);

export default Ingredients;
