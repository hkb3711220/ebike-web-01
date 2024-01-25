import React from "react";
import { Navbar, Home, Bike, Features, About, Footer } from "./components";

const App = () => {
  return ( 
    <div className="w-full">
      <div className="w-full bg-cover bg-hero justify-center">
        <Navbar />
        <Home />
      </div>
      <Bike />
      <Features />
      <About />
      <Footer/>
    </div>
  );
};

export default App;
