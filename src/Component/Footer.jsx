import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-1">
      <ul className="m-0 row row-cols-12 justify-content-evenly p-2 align-items-center">
        <li className="col col-3 pe-pointer">&#169; Copyrights reserved</li>
        <li className="col col-3 pe-pointer">A product from DatAlaBs</li>
        <li className="col col-3 pe-pointer">
          <a className="text-decoration-none text-white">
            Terms and Conditions
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
