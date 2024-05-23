import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About/About.js";
import Product from "./Components/Product/Product.js";
import Footer from "./Components/Footer/Footer.js";
import Partnerss from "./Components/Partners/Partners.js";
import Future from "./Components/Future/Future.js";
import Roadmap from "./Components/Roadmap/Roadmap.js";
import Galaxy from "./Components/Galaxy/Galaxy.js";
import Footer1 from "./Components/Footer1/Footer1.js";
import Token from "./Components/Token/Token.js";
import Gameplay from "./Components/Gameplay/Gmaeplay.js";
import Rescue from "./Components/Rescue/Rescue.js";
import Bruce from "./Components/Bruce/Bruce.js";
import Squad from "./Components/Squad/Squad.js";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gameplay />
      <Product />
      <Partnerss />
      <Token />
      <Rescue />
      <Squad />
      <Galaxy />
      <Future />
      <Roadmap />
      <Bruce />
      <Footer />
      <Footer1 />
    </>
  );
}

export default App;
