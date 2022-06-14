import React from "react";
import "./style.css";
import Info from "./components/info.js";
import About from "./components/about.js";
import Interests from "./components/interests.js";
import Footer from "./components/footer.js";

export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
