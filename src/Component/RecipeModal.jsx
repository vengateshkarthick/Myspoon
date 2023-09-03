import React from "react";
import Slice from "../assests/sliceback.svg";
import Close from "../assests/close.svg";
import announce from "../assests/announce.svg";
import checkbadge from "../assests/checkbadge.svg";
const RecipeModal = ({ image, summary, title, handleClose, ...details }) => {
  const {
    recipeId = "",
    nutrients = [],
    steps = [],
    recipename = [],
  } = details;
  const handleCloseIcon = (e) => {
    e.stopPropagation();
    handleClose();
  };
  return (
    <div className="recipe-modal" style={{ backgroundImage: `url(${Slice})` }}>
      <div className="recipe-modal-img">
        <img src={image} alt="recipe-image" />
      </div>
      <p className="title text-success fs-4 fw-bold text-capitalize px-2 py-1">
        {title}
      </p>
      <summary
        className="summary px-2 py-1"
        dangerouslySetInnerHTML={{ __html: summary }}
      ></summary>

      {steps.length > 0 && (
        <ul className="steps list-group  px-2 py-1">
          <p className="fs-5 fw-bold">
            <img className="announce px-1" src={announce} alt="announcement" />
            How to make it ?
          </p>
          {steps.map(({ step, ingridents }, id) => (
            <li className="list-group-item px-2 py-1" key={ingridents + id}>
              <div className="fw-bold fs-5">
                <img className="check px-1" src={checkbadge} alt="check" />
                Step {id + 1}
              </div>
              <div className="each-step">{step}</div>
              <br />
              <div className="ingridients-involved">
                <span className="text-dark">Ingridients</span>: {ingridents}
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="d-flex justify-content-end align-self-end px-2 py-1">
        <button className="btn  p-2" onClick={handleCloseIcon}>
          Close
        </button>
      </div>
    </div>
  );
};

export default RecipeModal;
