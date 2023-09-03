import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import Footer from "./Component/Footer";
import Heading from "./Component/Heading";
import RecipeContainer from "./Component/Recipe";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

const Container = () => {
  return (
    <div id="container-fluid">
      <Heading />
      <RecipeContainer />
      <Footer />
      <ToastContainer />
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
