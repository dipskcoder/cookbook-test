import React from "react";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import Details from "./components/Details";
import NavBar from "./components/NavBar";

const recipes = [
  {
    author: "Jim",
    name: "Chicken Curry",
    description: "Delicious spicy chicken curry",
  },
  {
    author: "Aravind",
    name: "Hamburger",
    description: "Juicy burger with toppings and a soft bun",
  },
];

function App() {
  const [details, setDetails] = useState();
  function handleDetails(ram) {
    setDetails(ram);
  }

  return (
    <div className="App">
      <div className="Header">
        <h1>Recipe Book</h1>
      </div>
      <div className="main-app">
        <div className="nav">
          <NavBar recipes={recipes} handleDetails={handleDetails} />
        </div>
        <div className="container">
          <div className="details">
            <Details details={details} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
