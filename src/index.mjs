import React from "react";
import ReactDOM from "react-dom/client";

import Footer from "./Component/Footer";
import Heading from "./Component/Heading";
import RecipeContainer from "./Component/Recipe";
import "./styles.css";


const Container = () => {
  return (
    <div id="container">
     <Heading />
     <RecipeContainer />
     <Footer />
    </div>
  );
};

const MyApp = () => {
  return (
    <div id="App">
      <Container />
    </div>
  );
};
const BaseElement = React.createElement("div", { id: "base" }, <MyApp />);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(BaseElement);
