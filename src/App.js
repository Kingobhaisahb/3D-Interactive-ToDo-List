import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ThreeScene from "./Components/ThreeScene";
import TextSection from "./Components/TextSection";
import Footer from "./Components/Footer";

function App(){
  return (
    <div className="App">
      <Navbar />
      <ThreeScene />
      <TextSection />
    </div>
  );
}

export default App;