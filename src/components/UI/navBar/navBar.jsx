import React from "react";
import { Link } from "react-router-dom";

import "./navBar.css";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top">
      <div className="container-fluid mx-5">
        <Link className="navbar-brand" to="/">
          <h2>Hotel Del Lunar</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse  navbar-collapse  justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item px-3">
              <Link
                className={
                  splitLocation[1] === "" ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                className={
                  splitLocation[1] === "insight"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/insight"
              >
                Insights
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                className={
                  splitLocation[1] === "rooms" ? "nav-link active" : "nav-link"
                }
                to="/rooms"
              >
                Rooms & Suits
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                className={
                  splitLocation[1] === "facilities"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/facilities"
              >
                Facilities
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                className={
                  splitLocation[1] === "contact"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
