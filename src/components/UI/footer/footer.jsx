import React from "react";
import "./footer.css";

import { Link } from "react-router-dom";

import { BsFillHeartFill } from "@react-icons/all-files/bs/BsFillHeartFill";
import { FaRegCopyright } from "@react-icons/all-files/fa/FaRegCopyright";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaWhatsappSquare } from "@react-icons/all-files/fa/FaWhatsappSquare";
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";

const Footer = () => {
  const bodyText = "email%20body";
  const text = `mailto:hello@Lunar.com?&subject=Week%20hours%20this%20week%20&body=${bodyText}`;
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <Link className="navbar-brand" to="/">
              <h2>Hotel Del Lunar</h2>
            </Link>
            <p>
              Escape to a place where you can <br /> relax and unwind,
              rejuvenate, and reconnect
            </p>
          </div>
          <div className="col-lg-3">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item px-3">
                <Link className="nav-link" aria-current="page" to="/">
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
                  Rooms & Suits
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
          <div className="col-lg-3">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item px-3">
                <Link className="nav-link" aria-current="page" to="/">
                  FaQ
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/insight">
                  Privacy & Policy
                </Link>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="/">
                  Address: No 1 Allen Avenue
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href={text}>
                  Email: hello@Lunar.com
                </a>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/">
                  Phone: +234 09048214560
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <div className="Social-links">
              <ul>
                <li>
                  <Link to="/" target="_blank">
                    <FaFacebookSquare className="icon" />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to="/" target="_blank">
                    <FaWhatsappSquare className="icon" />
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link to="/" target="_blank">
                    <FaInstagramSquare className="icon" />
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            With
            <span className="p-2">
              <BsFillHeartFill />
            </span>
            <span className="brand">Hotel Del Lunar</span>
            <span className="p-2">
              <FaRegCopyright />
              <span className="p-2">{new Date().getFullYear()}</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
