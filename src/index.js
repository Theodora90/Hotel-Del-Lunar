import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import App from "./App";
import Home from "./components/PAGES/home/home";
import Insight from "./components/PAGES/insights/insights";
import Rooms from "./components/PAGES/rooms/rooms";
import Facilities from "./components/PAGES/facilities/facilities";
import Contact from "./components/PAGES/contact/contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="insight" element={<Insight />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
