import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/UI/navBar/navBar";

function App() {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
}

export default App;
