import { useState } from "react";
import { Outlet } from "react-router";

const OutletContext = () => {
  const [selectedRecipe, setSelectedRecipe] = useState("");
  return <Outlet context={{ selectedRecipe, setSelectedRecipe }} />;
};

export default OutletContext;
