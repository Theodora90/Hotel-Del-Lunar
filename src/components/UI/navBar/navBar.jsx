import React from "react";
import { Link } from "react-router-dom";

import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top">
      <div className="container-fluid mx-5">
        <Link className="navbar-brand" to="/">
          Hotel Del Lunar
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to="/insight">
                Insights
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to="/">
                Room & Suits
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to="/">
                Facilities
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to="/">
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
