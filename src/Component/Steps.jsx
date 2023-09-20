import React from "react";
import checkbadge from "../assests/checkbadge.svg";

const IngSteps = ({ steps }) => {
  return (
    <>
      {steps.length > 0 && (
        <ul className="steps list-group border-none px-2 py-1">
          {steps.map(({ step }, id) => (
            <li
              className="list-group-item px-2 py-1 border-none"
              key={step + id}
            >
              <div className="fw-bold fs-5 row row-cols-12 gap-2 align-items-center justify-content-start">
                <div className="col col-12">{`Step ${id + 1}`}</div>
                <div className="col col-12 each-step text-dark">{step}</div>
              </div>

              <br />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default IngSteps;
