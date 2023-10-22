import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OutletContext from "./views/Outlet";
import { ToastContainer } from "react-toastify";
import Heading from "./Component/Heading";
import RecipeContainer from "./views/Recipe";
import RecipeModal from "./views/RecipeModal";
import Footer from "./Component/Footer";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

const Container = () => {
  return (
    <div id="App">
      <div id="container-fluid">
        <Heading />
        <OutletContext />
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
};

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/home",
        element: <RecipeContainer />,
      },
      {
        path: "/recipe",
        element: <RecipeModal />,
      },
    ],
  },
]);

const BaseElement = React.createElement(
  "div",
  { id: "base" },
  <RouterProvider router={route} />,
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(BaseElement);
