import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Gallery/>
    </div>
  );
}

export default App;
