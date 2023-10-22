import React, { useState } from "react";
import Summary from "../Component/Summary";
import Ingredients from "../Component/Ingredients";
import IngSteps from "../Component/Steps";
import { useNavigate, useOutletContext } from "react-router";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Box } from "@mui/system";
import announce from "../assests/announce.svg";

const RecipeModal = () => {
  const { selectedRecipe, setSelectedRecipe } = useOutletContext();
  const navigate = useNavigate();
  const { image, summary, title, ...details } = selectedRecipe;
  const [val, setTabVal] = useState("1");
  const { steps = [], ingredients = [] } = details;
  const handleCloseIcon = (e) => {
    e.stopPropagation();
    handleClose();
  };
  const handleTabChange = (_, key) => {
    setTabVal(key);
  };
  const handleClose = () => {
    setSelectedRecipe("");
    navigate("/recipe");
  };

  return (
    <div className="recipe-modal p-2">
      <p className="title text-success fs-4 fw-bold text-capitalize px-2 py-1">
        {title}
        <Summary content={summary} />
      </p>
      <p className="fs-5 fw-bold">
        <img className="announce px-1" src={announce} alt="announcement" />
        How to make it ?
      </p>

      <Box sx={{ width: "100%" }}>
        <Tabs
          value={val}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Steps" value="1" />
          <Tab label="Ingredients" value="2" />
        </Tabs>

        <div className="modal-content">
          {val === "1" ? (
            <IngSteps steps={steps} />
          ) : (
            <Ingredients details={ingredients} />
          )}
        </div>
      </Box>

      <div className="d-flex justify-content-end align-self-end px-2 py-1">
        <button className="btn  p-2" onClick={handleCloseIcon}>
          Close
        </button>
      </div>
    </div>
  );
};

export default RecipeModal;
