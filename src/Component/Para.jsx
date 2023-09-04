import React from "react";
import Spzmomant from "../assests/secialmoment.svg";
import Barbeque from "../assests/barbeque.svg";
const Para = () => {
  return (
    <div className="d-flex flex-column w-100 para">
      <div className="d-flex justify-content-evenly para-content">
        <div>
          <img src={Spzmomant} alt="dinner" className="para-image" />
        </div>
        <div className="fs-5">
          <span className="fs-3">Enjoy your moment with a bite</span>
          <p>
            is an important life skill that everyone should know. It can be a
            great way to show someone you care, and it can also be a fun
            activity to do with friends or family. There are many different
            techniques and recipes that you can try, so there’s always something
            new to learn.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-evenly para-content">
        <div className="fs-5">
          <span className="fs-3">Bite your every moments</span>
          <p>
            can be done in many different ways, such as baking, grilling,
            frying, and boiling. Each method has its own benefits and drawbacks.
            For example, baking is a healthier option because it doesn’t require
            the use of oil or fat. However, it can take longer to cook food this
            way.
          </p>
        </div>
        <div>
          <img src={Barbeque} alt="dinner" className="para-image" />
        </div>
      </div>
    </div>
  );
};
export default Para;
