import React from "react";
import Bag from "../assests/bag.svg";

const NoData = () => {
  return (
    <div className="d-flex gap-3 justify-content-center align-items-center">
      <p className="text-dark">Oops!, no items in groceris</p>
      <p className="no-data-image">
        <img src={Bag} alt="no data" />
      </p>
    </div>
  );
};

export default NoData;
